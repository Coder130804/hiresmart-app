const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB error:', err));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/interview', require('./routes/interviewRoutes')); 
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/score', require('./routes/scoreRoutes'));
app.use('/uploads', express.static('uploads'));
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

const cors = require("cors");

app.use(cors({
  origin: ["http://localhost:3000", "https://hiresmart-app.vercel.app"],
  credentials: true
}));

