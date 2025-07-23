// 📄 server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Use CORS early
app.use(cors({
  origin: ["http://localhost:3000", "https://hiresmart-app.vercel.app"],
  credentials: true
}));

// ✅ Increased body limit to handle big base64 videos
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB error:', err));

// ✅ Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/interview', require('./routes/interviewRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/score', require('./routes/scoreRoutes'));

// ✅ Static file serving
app.use('/uploads', express.static('uploads'));

// ✅ Server start
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
