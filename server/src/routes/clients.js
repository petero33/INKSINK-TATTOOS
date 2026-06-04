const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require('../middleware/auth');

const prisma = new PrismaClient();

// Get all clients (Dashboard)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      include: {
        appointments: true,
        requests: true,
        reviews: true
      },
      orderBy: { joinDate: 'desc' }
    });
    res.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

// Get client by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const client = await prisma.client.findUnique({
      where: { id: req.params.id },
      include: {
        appointments: { orderBy: { date: 'desc' } },
        requests: { orderBy: { createdAt: 'desc' } },
        reviews: true
      }
    });
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    res.json(client);
  } catch (error) {
    console.error('Error fetching client:', error);
    res.status(500).json({ error: 'Failed to fetch client' });
  }
});

// Update client (notes/preferences)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { notes, preferences, allergies } = req.body;
    
    const updatedClient = await prisma.client.update({
      where: { id: req.params.id },
      data: {
        notes: notes !== undefined ? notes : undefined,
        preferences: preferences !== undefined ? preferences : undefined,
        allergies: allergies !== undefined ? allergies : undefined
      }
    });
    
    res.json(updatedClient);
  } catch (error) {
    console.error('Error updating client:', error);
    res.status(500).json({ error: 'Failed to update client' });
  }
});

module.exports = router;
