const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');
const InterviewSession = require('../models/InterviewSession');
const authMiddleware = require('../middleware/auth');

// 📤 Upload Interview Video
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

// 📥 Save Interview Session Questions
router.post('/session', authMiddleware, async (req, res) => {
  try {
    const { questions } = req.body;

    if (!Array.isArray(questions) || questions.length !== 10) {
      return res.status(400).json({ success: false, message: '10 questions required' });
    }

    // Clear any previous session
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

// 📊 Score Interview Responses
router.post('/score', authMiddleware, async (req, res) => {
  try {
    const { responses } = req.body; // [{ question: "", transcript: "" }, ...]

    if (!Array.isArray(responses) || responses.length !== 10) {
      return res.status(400).json({ success: false, message: '10 responses required' });
    }

    const session = await InterviewSession.findOne({ userId: req.user.id });
    if (!session) {
      return res.status(404).json({ success: false, message: 'No session found' });
    }

    const questionMap = {};
    session.questions.forEach((q) => {
      questionMap[q.question] = {
        keywords: q.keywords || [],
        scoreMode: q.scoreMode || 'keyword'
      };
    });

    const scores = responses.map(({ question, transcript }) => {
      const sessionData = questionMap[question];
      if (!sessionData) {
        return { question, score: 0 }; // No keywords found for this question
      }

      let score = 0;
      const transcriptLower = transcript.toLowerCase();
      sessionData.keywords.forEach((keyword) => {
        if (transcriptLower.includes(keyword.toLowerCase())) {
          score += 2;
        }
      });

      // Cap the score at 10
      score = Math.min(score, 10);
      return { question, score };
    });

    res.json({ success: true, scores });
  } catch (err) {
    console.error('Scoring error:', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
