// routes/trainerRoutes.js
const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// Register a trainer
router.post('/register', async (req, res) => {
  try {
    const newTrainer = new Trainer(req.body);
    await newTrainer.save();
    res.status(201).json(newTrainer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
