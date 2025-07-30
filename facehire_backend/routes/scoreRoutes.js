const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');
const InterviewSession = require('../models/InterviewSession');
const auth = require('../middleware/auth');

router.get('/get-score', auth, async (req, res) => {
  try {
    const session = await InterviewSession.findOne({ userId: req.user.id });

    if (!session) {
      return res.status(404).json({ success: false, message: 'No interview session found' });
    }

    const sessionQuestions = session.questions.map(q => q.question);
    const interviews = await Interview.find({ userId: req.user.id });

    // Step 1: Match questions and get transcripts (if any)
    const results = sessionQuestions.map((question) => {
      const matched = interviews.find((i) => i.question === question);
      return {
        question,
        answered: !!matched,
        transcript: matched?.transcript || ''
      };
    });

    const answeredCount = results.filter(r => r.answered).length;
    const score = (answeredCount / sessionQuestions.length) * 10;

    const feedback =
      score >= 8 ? 'Excellent!' :
      score >= 5 ? 'Good effort, room for improvement.' :
      'Try answering more questions next time.';

    // Final response
    res.json({
      success: true,
      score,
      answered: results.map(r => r.answered),
      questions: results.map(r => r.question),
      transcripts: results.map(r => r.transcript),
      feedback,
    });

  } catch (err) {
    console.error('Error in /get-score:', err);
    res.status(500).json({ success: false, message: 'Failed to calculate score' });
  }
});

module.exports = router;
