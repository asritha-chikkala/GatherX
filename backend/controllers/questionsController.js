const Question = require('../models/Question');

// Get all questions (for organizers)
const getQuestions = async (req, res) => {
  try {
    const { sessionId, status } = req.query;
    let query = {};
    
    if (sessionId) query.sessionId = sessionId;
    if (status) query.status = status;
    
    const questions = await Question.find(query).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: questions,
      total: questions.length
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Get single question
const getQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Question not found' 
      });
    }
    
    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error', 
      error: error.message 
    });
  }
};

// Create new question (from attendee)
const createQuestion = async (req, res) => {
  try {
    const { sessionId, sessionName, questionText, attendeeName, attendeeEmail, isAnonymous } = req.body;
    
    const question = new Question({
      sessionId,
      sessionName,
      questionText,
      attendeeName: isAnonymous ? 'Anonymous' : attendeeName,
      attendeeEmail: isAnonymous ? 'anonymous@example.com' : attendeeEmail,
      isAnonymous
    });
    
    const savedQuestion = await question.save();
    
    res.status(201).json({
      success: true,
      message: 'Question submitted successfully!',
      data: savedQuestion
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error creating question', 
      error: error.message 
    });
  }
};

// Update question
const updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Question not found' 
      });
    }
    
    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error updating question', 
      error: error.message 
    });
  }
};

// Answer question (for organizers)
const answerQuestion = async (req, res) => {
  try {
    const { answer } = req.body;
    
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      { 
        answer,
        status: 'answered',
        answeredAt: new Date()
      },
      { new: true, runValidators: true }
    );
    
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Question not found' 
      });
    }
    
    res.json({
      success: true,
      message: 'Question answered successfully!',
      data: question
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Error answering question', 
      error: error.message 
    });
  }
};

// Delete question
const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    
    if (!question) {
      return res.status(404).json({ 
        success: false,
        message: 'Question not found' 
      });
    }
    
    res.json({ 
      success: true,
      message: 'Question deleted successfully' 
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
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  answerQuestion
};