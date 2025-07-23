// 📄 facehire_backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Multer file upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files are allowed'));
  }
});

// Save or update profile
router.post('/', auth, upload.single('cv'), async (req, res) => {
  try {
    // debug check
    // console.log('req.body:', req.body);
    // console.log('req.file:', req.file);

    const {
      name, email, phone, dob, experience,
      previousCompany, previousSalary, salaryExpectations,
      areaOfInterest, qualifications, skills,
      city, state, country, address
    } = req.body;

    // handle language array robustly
    const rawLang = req.body['languages[]'] || req.body.languages || [];
    const languages = Array.isArray(rawLang) ? rawLang : [rawLang];

    const profileData = {
      name, email, phone, dob, experience,
      previousCompany, previousSalary, salaryExpectations,
      areaOfInterest, qualifications, skills,
      languages,
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
    console.error('❌ Error saving profile:', err.message);
    res.status(500).json({ success: false, message: 'Error saving profile' });
  }
});
console.log('📦 Incoming profile data:', req.body);
console.log('📎 Uploaded file:', req.file);

module.exports = router;
