const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Check if any artist exists (for first-time setup)
router.get('/check-setup', async (req, res) => {
  try {
    const artistCount = await prisma.artist.count();
    res.json({ setupRequired: artistCount === 0 });
  } catch (error) {
    res.status(500).json({ message: 'Database error' });
  }
});

// Setup the first super user
router.post('/setup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Ensure no artist exists yet
    const artistCount = await prisma.artist.count();
    if (artistCount > 0) {
      return res.status(403).json({ message: 'Setup has already been completed.' });
    }

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newArtist = await prisma.artist.create({
      data: {
        username,
        email,
        passwordHash
      }
    });

    const token = jwt.sign(
      { role: 'artist', id: newArtist.id, name: newArtist.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, message: 'Super user created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error: error.message });
  }
});

// Real Database Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Allow login by username or email
    const artist = await prisma.artist.findFirst({
      where: {
        OR: [
          { username: username },
          { email: username }
        ]
      }
    });

    if (!artist) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, artist.passwordHash);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { role: 'artist', id: artist.id, name: artist.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token, message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
