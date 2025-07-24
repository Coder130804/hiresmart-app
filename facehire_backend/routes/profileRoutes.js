// 📁 backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const auth = require('../middleware/auth');
const multer = require('multer');

// Save uploaded files to /uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// 🔹 GET PROFILE
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.user.email });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 POST/UPDATE PROFILE
router.post('/', auth, upload.single('cv'), async (req, res) => {
  try {
    const existing = await Profile.findOne({ email: req.user.email });
    const profileData = {
      ...req.body,
      email: req.user.email,
      languages: req.body['languages'] || [],
      cv: req.file ? req.file.filename : existing?.cv || ''
    };

    if (existing) {
      await Profile.findByIdAndUpdate(existing._id, profileData);
    } else {
      const newProfile = new Profile(profileData);
      await newProfile.save();
    }

    res.json({ success: true, message: 'Profile saved/updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
