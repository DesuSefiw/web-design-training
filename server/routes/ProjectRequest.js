const express = require('express');
const router = express.Router();
const ProjectRequest = require('../models/ProjectRequest');

router.post('/request', async (req, res) => {
  try {
    const newRequest = new ProjectRequest(req.body);
    await newRequest.save();
    res.status(201).json({ message: 'Request submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit request' });
  }
});

module.exports = router;
