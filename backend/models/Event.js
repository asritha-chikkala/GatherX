const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Event name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  type: {
    type: String,
    required: [true, 'Event type is required'],
    enum: ['conference', 'workshop', 'seminar', 'networking', 'webinar']
  },
  location: {
    type: String,
    required: [true, 'Event location is required'],
    trim: true
  },
  attendees: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['upcoming', 'live', 'completed', 'cancelled'],
    default: 'upcoming'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);