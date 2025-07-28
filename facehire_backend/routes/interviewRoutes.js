const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');
const authMiddleware = require('../middleware/auth');
const InterviewSession = require('../models/InterviewSession');

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
// 📥 Save interview session questions
router.post('/session', authMiddleware, async (req, res) => {
  try {
    const { questions } = req.body;

    if (!Array.isArray(questions) || questions.length !== 10) {
      return res.status(400).json({ success: false, message: '10 questions required' });
    }

    // Remove previous session if it exists for the same user
    await InterviewSession.deleteMany({ userId: req.user.id });

    // Save new session
    const session = new InterviewSession({
      userId: req.user.id,
      questions
    });

    await session.save();
    res.json({ success: true, message: 'Interview session saved' });
  } catch (err) {
    console.error('Session save error:', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
