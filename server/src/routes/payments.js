const express = require('express');
const router = express.Router();
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Helper to generate Daraja access token
const getDarajaToken = async () => {
  const consumerKey = process.env.DARAJA_CONSUMER_KEY;
  const consumerSecret = process.env.DARAJA_CONSUMER_SECRET;
  
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  
  try {
    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Daraja token:', error.message);
    throw new Error('Failed to authenticate with M-Pesa');
  }
};

// Initiate STK Push
router.post('/stkpush', async (req, res) => {
  try {
    const { phone, amount, appointmentId } = req.body;
    
    // Format phone to 254XXXXXXXXX
    let formattedPhone = phone.replace(/\D/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '254' + formattedPhone.substring(1);
    } else if (formattedPhone.startsWith('254')) {
      // Already correct
    } else {
      return res.status(400).json({ message: 'Invalid phone number format' });
    }

    const token = await getDarajaToken();
    
    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    
    // Timestamp format YYYYMMDDHHmmss
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

    const payload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Math.ceil(amount), // Ensure integer
      PartyA: formattedPhone,
      PartyB: shortcode,
      PhoneNumber: formattedPhone,
      CallBackURL: process.env.MPESA_CALLBACK_URL,
      AccountReference: `Appt-${appointmentId || 'Deposit'}`,
      TransactionDesc: 'InkSink Tattoo Deposit'
    };

    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json({
      success: true,
      message: 'STK push initiated',
      CheckoutRequestID: response.data.CheckoutRequestID,
      ResponseDescription: response.data.ResponseDescription
    });

  } catch (error) {
    console.error('STK Push Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to initiate STK push' });
  }
});

// Safaricom Callback Webhook
router.post('/callback', async (req, res) => {
  console.log('M-Pesa Callback Received:', JSON.stringify(req.body, null, 2));
  
  try {
    const { Body: { stkCallback } } = req.body;
    
    if (stkCallback.ResultCode === 0) {
      // Payment was successful
      const meta = stkCallback.CallbackMetadata.Item;
      const amount = meta.find(item => item.Name === 'Amount').Value;
      const receiptNo = meta.find(item => item.Name === 'MpesaReceiptNumber').Value;
      const phone = meta.find(item => item.Name === 'PhoneNumber').Value;
      
      console.log(`Payment Success: ${amount} received from ${phone}. Receipt: ${receiptNo}`);
      
      // Here you would typically look up the pending appointment by CheckoutRequestID (if saved in DB)
      // and update the depositPaid status to true, saving the receiptNo.
    } else {
      // Payment failed or was cancelled
      console.log(`Payment Failed/Cancelled: ${stkCallback.ResultDesc}`);
    }
  } catch (error) {
    console.error('Error processing callback:', error);
  }
  
  // Safaricom expects a success response regardless of payment outcome
  res.json({ ResultCode: 0, ResultDesc: "Callback accepted successfully" });
});

module.exports = router;
