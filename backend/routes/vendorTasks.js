const express = require('express');
const router = express.Router();
const {
  getVendorTasks,
  getVendorTask,
  createVendorTask,
  updateVendorTask,
  deleteVendorTask,
  updateTaskStatus
} = require('../controllers/vendorTasksController');

router.route('/')
  .get(getVendorTasks)
  .post(createVendorTask);

router.route('/:id')
  .get(getVendorTask)
  .put(updateVendorTask)
  .delete(deleteVendorTask);

router.route('/:id/status')
  .patch(updateTaskStatus);

module.exports = router;