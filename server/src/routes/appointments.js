const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require('../middleware/auth');

const prisma = new PrismaClient();

// Protected: Get today's appointments
router.get('/today', authMiddleware, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const appointments = await prisma.appointment.findMany({
      where: {
        date: {
          gte: today,
          lt: tomorrow
        }
      },
      include: { client: true, request: true },
      orderBy: { time: 'asc' }
    });
    
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching today appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// Protected: Get appointments by month (for calendar)
router.get('/month/:year/:month', authMiddleware, async (req, res) => {
  try {
    const { year, month } = req.params;
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const appointments = await prisma.appointment.findMany({
      where: {
        date: {
          gte: startDate,
          lt: endDate
        }
      },
      include: { client: true },
      orderBy: { date: 'asc' }
    });
    
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching monthly appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// Protected: Create an appointment from an accepted request
router.post('/', authMiddleware, async (req, res) => {
  try {
    const {
      clientId, requestId, tattooType, date, time, 
      duration, totalCost, depositAmount, notes
    } = req.body;

    const appointment = await prisma.appointment.create({
      data: {
        clientId,
        requestId,
        tattooType,
        date: new Date(date),
        time,
        duration,
        totalCost: parseInt(totalCost),
        depositAmount: parseInt(depositAmount),
        depositPaid: false,
        notes,
        status: 'CONFIRMED'
      }
    });

    res.status(201).json(appointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

module.exports = router;
