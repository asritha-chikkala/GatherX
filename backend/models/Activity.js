const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'Activity type is required'],
    enum: ['question', 'announcement', 'sponsor', 'registration', 'feedback']
  },
  title: {
    type: String,
    required: [true, 'Activity title is required'],
    trim: true
  },
  details: {
    type: String,
    required: [true, 'Activity details are required']
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: false
  },
  createdBy: {
    type: String,
    default: 'system'
  },
  metadata: {
    // Flexible field for type-specific data
    questionFrom: String,
    announcementType: String,
    sponsorName: String,
    rating: Number
  },
  isResolved: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema);