const express = require('express');
const router = express.Router();
const Video = require('../models/Video'); // Model that stores video per question
const auth = require('../middleware/auth');

router.get('/get-score', auth, async (req, res) => {
  try {
    const videos = await Video.find({ userId: req.user.id });

    const totalQuestions = 10;
    const answered = Array(totalQuestions).fill(false);

    // Mark answered questions
    videos.forEach(v => {
      if (v.questionIndex !== undefined && v.questionIndex < totalQuestions) {
        answered[v.questionIndex] = true;
      }
    });

    const answeredCount = answered.filter(x => x).length;
    const score = (answeredCount / totalQuestions) * 10;

    const feedback = score >= 8 ? "Excellent!" :
                     score >= 5 ? "Good effort, room for improvement." :
                     "Try answering more questions next time.";

    res.json({ success: true, score, answered, feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to generate score" });
  }
});

module.exports = router;
