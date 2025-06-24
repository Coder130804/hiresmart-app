// controllers/aiAnalysisController.js

const User = require('../models/User');
const Interview = require('../models/Interview'); // stores question/answers/video
const jwt = require('jsonwebtoken');

exports.analyzeInterview = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const videos = await Interview.find({ user: userId });
    const totalQuestions = 10;
    const answered = videos.length;
    const unanswered = totalQuestions - answered;

    const score = Math.max(1, Math.round((answered / totalQuestions) * 10)); // 1–10 rating

    // Result map
    const result = Array.from({ length: totalQuestions }, (_, i) => ({
      questionNo: i + 1,
      status: videos[i] ? "Answered" : "Unanswered"
    }));

    res.json({ score, result });
  } catch (err) {
    console.error("AI Analysis error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
