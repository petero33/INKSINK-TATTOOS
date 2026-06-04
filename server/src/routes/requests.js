const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require('../middleware/auth');

const prisma = new PrismaClient();

// Public: Submit a new tattoo request
router.post('/', async (req, res) => {
  try {
    const {
      name, email, phone, idea, placement, size, style, colorType,
      budget, preferredDate, painTolerance, referenceImages
    } = req.body;

    // Check if client exists by phone
    let client = await prisma.client.findUnique({ where: { phone } });
    
    if (!client) {
      client = await prisma.client.create({
        data: { name, email, phone }
      });
    }

    // Create the request
    const request = await prisma.tattooRequest.create({
      data: {
        clientId: client.id,
        tattooIdea: idea,
        placement,
        size,
        style,
        colorType,
        budget,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
        painTolerance: parseInt(painTolerance, 10),
        referenceImages: referenceImages || [],
        status: 'PENDING'
      }
    });

    res.status(201).json({ success: true, request });
  } catch (error) {
    console.error('Error submitting request:', error);
    res.status(500).json({ error: 'Failed to submit request' });
  }
});

// Protected: Get all pending requests
router.get('/', authMiddleware, async (req, res) => {
  try {
    const requests = await prisma.tattooRequest.findMany({
      where: { status: 'PENDING' },
      include: { client: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
});

// Protected: Update request status
router.put('/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body; // ACCEPTED, DECLINED, CONSULTATION
    
    const request = await prisma.tattooRequest.update({
      where: { id: req.params.id },
      data: { status }
    });
    
    // If accepted, you might also want to trigger an appointment creation draft here
    // but we'll leave that flow manual for the MVP.
    
    res.json(request);
  } catch (error) {
    console.error('Error updating request status:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

module.exports = router;
