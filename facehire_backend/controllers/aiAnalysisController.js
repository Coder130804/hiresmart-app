const fs = require('fs');
const tmp = require('tmp-promise');
const jwt = require('jsonwebtoken');
const { Configuration, OpenAIApi } = require('openai');
const Interview = require('../models/Interview');
const InterviewSession = require('../models/InterviewSession');

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

// ✅ Combine all questions and flatten
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

// ✅ Utility function to match keywords
const matchKeywords = (answer, keywords) => {
  const matched = [];
  const lowerAnswer = answer.toLowerCase();
  for (const keyword of keywords) {
    if (lowerAnswer.includes(keyword.toLowerCase())) {
      matched.push(keyword);
    }
  }
  return matched;
};

// ✅ Feedback handler
const getFeedback = async (req, res) => {
  try {
    const { interviewSessionId } = req.body;

    if (!interviewSessionId) {
      return res.status(400).json({ success: false, message: 'Interview Session ID is required' });
    }

    const interviewSession = await InterviewSession.findById(interviewSessionId);
    if (!interviewSession) {
      return res.status(404).json({ success: false, message: 'Interview session not found' });
    }

    const results = [];
    let totalScore = 0;

    for (const q of interviewSession.questions) {
      const answer = q.transcript || '';
      const questionText = q.question;

      // ✅ Find the question's keyword list
      const matchedQuestion = allQuestionSets.find(qObj => qObj.question === questionText);

      let keywords = [];
      if (matchedQuestion && matchedQuestion.keywords) {
        keywords = matchedQuestion.keywords;
      }

      const matchedKeywords = matchKeywords(answer, keywords);
      const score = keywords.length > 0 ? Math.round((matchedKeywords.length / keywords.length) * 100) : 0;

      results.push({
        question: questionText,
        transcript: answer,
        matchedKeywords,
        score
      });

      totalScore += score;
    }

    const avgScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;

    const summary =
      avgScore >= 80
        ? "Excellent performance! You covered most of the key points."
        : avgScore >= 50
        ? "Good effort! You mentioned some important points, but there's room for improvement."
        : "Needs improvement. Try to include more relevant details next time.";

    res.json({
      success: true,
      totalScore: avgScore,
      summary,
      results
    });

  } catch (error) {
    console.error('Error in getFeedback:', error);
    res.status(500).json({ success: false, message: 'Server error while generating feedback.' });
  }
};

module.exports = { getFeedback };
