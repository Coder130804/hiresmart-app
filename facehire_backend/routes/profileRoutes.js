// ✅ profileRoutes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Setup multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files allowed'));
  }
});

// 🔍 Get profile by email
router.get('/email/:email', async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.params.email });
    if (!profile) return res.status(404).json({ success: false, message: 'Not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 📤 Save or update profile
router.post('/', upload.single('cv'), async (req, res) => {
  try {
    const profileData = req.body;
    if (req.file) profileData.cv = req.file.filename;

    let profile = await Profile.findOne({ email: profileData.email });
    if (profile) {
      profile.set(profileData);
    } else {
      profile = new Profile(profileData);
    }

    await profile.save();
    res.json({ success: true });
  } catch (err) {
    console.error('Error saving profile:', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
