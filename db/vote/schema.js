const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  isPositive: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  answerId: mongoose.Schema.Types.ObjectId,
  createdById: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Vote', VoteSchema);
