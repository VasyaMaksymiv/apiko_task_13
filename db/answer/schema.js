const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  description: String,
  title: {
    type: String,
    required: true
  },
  questionId: mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: new Date()
  },
  createdById: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Answer', AnswerSchema);
