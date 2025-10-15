// 📄 facehire_backend/server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json({ limit: '500mb' })); // for JSON body (videoBase64)
app.use(express.urlencoded({ extended: true, limit: '500mb' })); // for form-data (profile)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // serve uploaded files

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/interview', interviewRoutes);
app.use('/api/ai', aiRoutes);

// Optional root route for test
app.get('/', (req, res) => {
  res.send('✅ HireSol backend is up and running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
