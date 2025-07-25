// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const trainerRoutes = require('./routes/trainerRoutes');
const trainers = require('./routes/trainers');

const app = express();
app.use(cors({
  origin: 'https://web-design-training-lilac.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));app.use(express.json());
const projectRoutes = require('./routes/ProjectRequest');
app.use('/api/projects', projectRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/trainers',trainers);
app.use('/api/trainer', trainerRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
