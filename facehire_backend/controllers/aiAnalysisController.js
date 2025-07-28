const fs = require('fs');
const tmp = require('tmp-promise');
const jwt = require('jsonwebtoken');
const { Configuration, OpenAIApi } = require('openai');
const Interview = require('../models/Interview');

// ✅ Import ALL question files
const { drcrQuestions } = require('../../shared/questions/drcr');
const { eduQuestions } = require('../../shared/questions/edu');
const { genderQuestions } = require('../../shared/questions/gender');
const { hnQuestions } = require('../../shared/questions/hn');
const { hrQuestions } = require('../../shared/questions/hr');
const { infraQuestions } = require('../../shared/questions/infra');
const { lsdQuestions } = require('../../shared/questions/lsd');
const { merQuestions } = require('../../shared/questions/mer');
const { mlrQuestions } = require('../../shared/questions/mlr');
const { tribalQuestions } = require('../../shared/questions/tribal');
const { volunteerQuestions } = require('../../shared/questions/volunteer');
const { washQuestions } = require('../../shared/questions/wash');
const { youthQuestions } = require('../../shared/questions/youth');

// ✅ Combine all questions
const allQuestionSets = [
  ...drcrQuestions,
  ...eduQuestions,
  ...genderQuestions,
  ...hnQuestions,
  ...hrQuestions,
  ...infraQuestions,
  ...lsdQuestions,
  ...merQuestions,
  ...mlrQuestions,
  ...tribalQuestions,
  ...volunteerQuestions,
  ...washQuestions,
  ...youthQuestions
];

// ✅ Whisper Setup
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// ✅ Whisper feedback route
exports.analyzeInterview = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const interviews = await Interview.find({ userId });
    if (!interviews.length) return res.status(404).json({ message: 'No interview found' });

    const results = [];

    for (const entry of interviews) {
      const { question, video, videoType } = entry;

      // Write video buffer to temp file
      const tmpFile = await tmp.file({ postfix: '.' + videoType.split('/')[1] });
      fs.writeFileSync(tmpFile.path, video);

      // Whisper transcription
      const transcriptResponse = await openai.createTranscription(
        fs.createReadStream(tmpFile.path),
        'whisper-1'
      );

      const transcript = transcriptResponse?.data?.text || '';

      // Find matching question (any theme)
      const qData = allQuestionSets.find(q => q.question === question);
      let matchedKeywords = [];
      let score = 0;

      if (qData) {
        const transcriptLower = transcript.toLowerCase();
        matchedKeywords = qData.keywords.filter(k =>
          transcriptLower.includes(k.toLowerCase())
        );
        score = matchedKeywords.length;
      }

      results.push({
        question,
        transcript,
        matchedKeywords,
        score
      });

      await tmpFile.cleanup();
    }

    const total = results.reduce((acc, r) => acc + r.score, 0);
    const maxScore = results.length * 10;
    const finalScore = Math.min(10, Math.round((total / maxScore) * 10));
    const summary = finalScore >= 8
      ? "🌟 Excellent communication & relevance"
      : finalScore >= 5
      ? "🙂 Decent answers, scope for clarity"
      : "⚠️ Needs stronger alignment with question keywords";

    res.json({
      finalScore,
      summary,
      answers: results
    });
  } catch (err) {
    console.error("Whisper AI analysis error:", err.message);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};