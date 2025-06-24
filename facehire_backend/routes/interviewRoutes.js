const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');
const authMiddleware = require('../middleware/auth');

router.post('/upload', authMiddleware, async (req, res) => {
  try {
    const { question, videoType, videoBase64 } = req.body;

    if (!question || !videoType || !videoBase64) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const buffer = Buffer.from(videoBase64, 'base64');

    const interview = new Interview({
      userId: req.user.id,
      question,
      video: buffer,
      videoType
    });

    await interview.save();
    res.json({ success: true, message: 'Interview video saved successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
