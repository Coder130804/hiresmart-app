// 📄 facehire_backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const auth = require('../middleware/auth');

// Save or Update Profile
router.post('/save', auth, async (req, res) => {
  try {
    const { name, email, phone, dob, experience, city, state, country, address } = req.body;

    let profile = await Profile.findOne({ userId: req.user.id });
    if (profile) {
      // Update existing
      profile.set({ name, email, phone, dob, experience, city, state, country, address });
    } else {
      // Create new
      profile = new Profile({ userId: req.user.id, name, email, phone, dob, experience, city, state, country, address });
    }

    await profile.save();
    res.json({ success: true, message: 'Profile saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error saving profile' });
  }
});

module.exports = router;
