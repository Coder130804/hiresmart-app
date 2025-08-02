const fs = require('fs');
const tmp = require('tmp-promise');
const jwt = require('jsonwebtoken');
const { Configuration, OpenAIApi } = require('openai');
const Interview = require('../models/Interview');
const InterviewSession = require('../models/InterviewSession');

// ✅ Import ALL question files
import { agriQuestions } from '../question/agri';
import { cseQuestions } from '../question/cse';
import { commQuestions } from '../question/comm';
import { cdQuestions } from '../question/cd';
import { daQuestions } from '../question/da';
import { disabilityInclusionQuestions } from '../question/dis';
import { eduQuestions } from '../question/edu';
import { financeQuestions } from '../question/fna';
import { genderQuestions } from '../question/gender';
import { grassQuestions } from '../question/grass';
import { infraQuestions } from '../question/infra';
import { peopleQuestions } from '../question/people';
import { pnaQuestions } from '../question/pna';
import { hrQuestions } from '../question/hr';
import { pbQuestions } from '../question/pb';
import { lsdQuestions } from '../question/lsd';
import { sports } from '../question/sports';
import { supplyQuestions } from '../question/supply';
import { tribalQuestions } from '../question/tribal';
import { urbanDevelopmentQuestions } from '../question/udev';
import { uhab } from '../question/uhab';
import { wecoQuestions } from '../question/weco';

// ✅ Combine all questions and flatten
const allQuestionSets = [
  ...agriQuestions,
  ...cseQuestions,
  ...commQuestions,
  ...cdQuestions,
  ...daQuestions,
  ...disabilityInclusionQuestions,
  ...eduQuestions,
  ...financeQuestions,
  ...genderQuestions,
  ...grassQuestions,
  ...infraQuestions,
  ...hrQuestions,
  ...peopleQuestions,
  ...pnaQuestions,
  ...lsdQuestions,
  ...pbQuestions,
  ...sports,
  ...supplyQuestions,
  ...tribalQuestions,
  ...urbanDevelopmentQuestions,
  ...uhab,
  ...wecoQuestions
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
