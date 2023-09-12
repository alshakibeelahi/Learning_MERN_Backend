const express = require('express')
const router = express.Router()

const { createQuiz, getQuiz, updateQuiz, getById, deleteQuiz } = require('../controllers/quizController')

router.post('/',createQuiz)
router.get('/', getQuiz)
router.get('/:id', getById)
router.put('/:id', updateQuiz)
router.delete('/:id', deleteQuiz)

module.exports = router