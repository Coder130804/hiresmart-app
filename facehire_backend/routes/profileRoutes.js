// 📄 facehire_backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // this folder must exist
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Save or Update Profile (including CV)
router.post('/', auth, upload.single('cv'), async (req, res) => {
  try {
    const {
      name, email, phone, dob, experience,
      previousCompany, previousSalary, salaryExpectations,
      areaOfInterest, qualifications, skills,
      city, state, country, address
    } = req.body;

    const languages = req.body['languages[]'] || []; // handles multi-select

    const profileData = {
      name, email, phone, dob, experience,
      previousCompany, previousSalary, salaryExpectations,
      areaOfInterest, qualifications, skills,
      languages: Array.isArray(languages) ? languages : [languages],
      city, state, country, address
    };

    if (req.file) {
      profileData.cv = req.file.filename;
    }

    let profile = await Profile.findOne({ userId: req.user.id });

    if (profile) {
      profile.set(profileData);
    } else {
      profile = new Profile({ userId: req.user.id, ...profileData });
    }

    await profile.save();
    res.json({ success: true, message: 'Profile saved successfully' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Error saving profile' });
  }
});

module.exports = router;
