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
router.get('/', async (req, res) => {
  try {
    const requests = await ProjectRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch project requests' });
  }
});
// DELETE project request
router.delete('/:id', async (req, res) => {
  try {
    await ProjectRequest.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project request deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete project request' });
  }
});

module.exports = router;
