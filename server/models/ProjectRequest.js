const mongoose = require('mongoose');

const ProjectRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  projectType: String,
  details: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProjectRequest', ProjectRequestSchema);
