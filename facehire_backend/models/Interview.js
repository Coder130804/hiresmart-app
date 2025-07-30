const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  video: {
    type: Buffer,
    required: true,
  },
  videoType: {
    type: String,
    required: true,
  },
  transcript: {
    type: String,
    required: false, // optional for now
  },
  score: {
    type: Number,
    required: false, // calculated from keywords
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Interview', InterviewSchema);
