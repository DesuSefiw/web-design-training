// models/ProjectRequest.js
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  projectType: String,
  details: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProjectRequest', requestSchema);
