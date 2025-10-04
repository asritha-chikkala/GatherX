// routes/events.js - ADD THIS ROUTE
const express = require('express');
const router = express.Router();
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  registerUserForEvent  // ADD THIS
} = require('../controllers/eventsController');

router.route('/')
  .get(getEvents)
  .post(createEvent);

router.route('/:id')
  .get(getEvent)
  .put(updateEvent)
  .delete(deleteEvent);

// ADD THIS SINGLE ROUTE FOR REGISTRATION
router.post('/:id/register', registerUserForEvent);

module.exports = router;