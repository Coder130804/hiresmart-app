// 📄 server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Use this only ONCE and with options
app.use(cors({
  origin: ["http://localhost:3000", "https://hiresmart-app.vercel.app"],
  credentials: true
}));

// ✅ DO NOT use express.json for multipart/form-data (used in file upload form)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Keep this if you use JSON requests in other routes (like login)

// ✅ Serve uploads folder for accessing CV
app.use('/uploads', express.static('uploads'));

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB error:', err));

// ✅ API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/interview', require('./routes/interviewRoutes')); 
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/score', require('./routes/scoreRoutes'));

// ✅ Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
