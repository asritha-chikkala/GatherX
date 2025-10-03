const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  sessionId: {
    type: String, // Change from ObjectId to String
    required: true
  },
  sessionName: {
    type: String,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  attendeeName: {
    type: String,
    required: true
  },
  attendeeEmail: {
    type: String,
    required: true
  },
  isAnonymous: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'answered'],
    default: 'pending'
  },
  answer: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  answeredAt: {
    type: Date
  }
});

module.exports = mongoose.model('Question', questionSchema);