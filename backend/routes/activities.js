const express = require('express');
const router = express.Router();
const {
  getActivities,
  createActivity,
  resolveActivity
} = require('../controllers/activitiesController');

router.route('/')
  .get(getActivities)
  .post(createActivity);

router.route('/:id/resolve')
  .patch(resolveActivity);

module.exports = router;