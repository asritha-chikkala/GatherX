const mongoose = require('mongoose');

const vendorTaskSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: true
  },
  vendorName: {
    type: String,
    required: true
  },
  taskName: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  dueDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'overdue'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  assignedBy: {
    type: String,
    required: true
  },
  assignedDate: {
    type: Date,
    default: Date.now
  },
  completedDate: {
    type: Date
  },
  notes: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('VendorTask', vendorTaskSchema);