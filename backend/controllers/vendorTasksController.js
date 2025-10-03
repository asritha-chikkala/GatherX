const VendorTask = require('../models/VendorTask');

// Get all tasks for a vendor
const getVendorTasks = async (req, res) => {
  try {
    const { vendorId, status } = req.query;
    let query = {};
    
    if (vendorId) query.vendorId = vendorId;
    if (status) query.status = status;
    
    const tasks = await VendorTask.find(query).sort({ dueDate: 1 });
    
    res.json({
      success: true,
      data: tasks,
      total: tasks.length
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Get single task
const getVendorTask = async (req, res) => {
  try {
    const task = await VendorTask.findById(req.params.id);
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Create new task (for organizers)
const createVendorTask = async (req, res) => {
  try {
    const task = new VendorTask(req.body);
    const savedTask = await task.save();
    
    res.status(201).json({
      success: true,
      message: 'Task created successfully!',
      data: savedTask
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error creating task', 
      error: error.message 
    });
  }
};

// Update task
const updateVendorTask = async (req, res) => {
  try {
    const task = await VendorTask.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error updating task', 
      error: error.message 
    });
  }
};

// Update task status (for vendors)
const updateTaskStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    
    const updateData = { status };
    if (notes) updateData.notes = notes;
    if (status === 'completed') updateData.completedDate = new Date();
    
    const task = await VendorTask.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    res.json({
      success: true,
      message: 'Task status updated successfully!',
      data: task
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error updating task status', 
      error: error.message 
    });
  }
};

// Delete task
const deleteVendorTask = async (req, res) => {
  try {
    const task = await VendorTask.findByIdAndDelete(req.params.id);
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    res.json({ 
      success: true,
      message: 'Task deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

module.exports = {
  getVendorTasks,
  getVendorTask,
  createVendorTask,
  updateVendorTask,
  deleteVendorTask,
  updateTaskStatus
};