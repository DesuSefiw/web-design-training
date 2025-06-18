// models/Trainer.js
const mongoose = require('mongoose');

const TrainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  platform: String,
  motivation: String,
  registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trainer', TrainerSchema);
