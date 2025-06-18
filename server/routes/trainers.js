const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');
// GET all trainers
router.get('/', async (req, res) => {
  try {
    const allTrainers = await Trainer.find();
    res.json(allTrainers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trainers' });
  }
});

// DELETE trainer
router.delete('/:id', async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Trainer deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete' });
  }
});

// UPDATE trainer
router.put('/:id', async (req, res) => {
  try {
    const updated = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update' });
  }
});

module.exports = router;
