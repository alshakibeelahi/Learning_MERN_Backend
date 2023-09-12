const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  options: [
    {
      name: {
        type: String,
        required: false,
        default: 0
      },
      details: {
        type: String,
        required: false,
        default: 0
      }
    }
  ],
  answer: {
    type: String,
    required: false,
    default: 0
  }

})

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;