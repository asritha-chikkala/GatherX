const express = require('express');
const router = express.Router();
const {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  answerQuestion
} = require('../controllers/questionsController');

router.route('/')
  .get(getQuestions)
  .post(createQuestion);

router.route('/:id')
  .get(getQuestion)
  .put(updateQuestion)
  .delete(deleteQuestion);

router.route('/:id/answer')
  .patch(answerQuestion);

module.exports = router;