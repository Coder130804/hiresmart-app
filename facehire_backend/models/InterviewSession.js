// ✅ facehire_backend/models/InterviewSession.js
const mongoose = require('mongoose');

const InterviewSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  questions: [
    {
      question: { type: String, required: true },
      theme: { type: String },              // e.g., "edu", "health", etc.
      scoreMode: { type: String },          // e.g., "keyword"
      keywords: [{ type: String }]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('InterviewSession', InterviewSessionSchema);
