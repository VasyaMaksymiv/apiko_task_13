const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: String,
  tags: String,
  createdAd: {
    type: Date,
    default: Date.now
  },
  createdById: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Qestion', QuestionSchema);
