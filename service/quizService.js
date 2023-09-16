const mongoose = require("mongoose");
const Quiz = require('../models/quizModel')

exports.addQuiz = async (quizInfo) => {
  try {
    const newQuiz = new Quiz(quizInfo);
    await newQuiz.save();
    return newQuiz;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getAllQuiz = async (e) => {
  try {
    const quizs = await Quiz.find().exec();
    return quizs;
  } catch (err) {
    console.error(err);
    return null;
  }
};
exports.getQuizById = async (id) => {
  try {
    const quiz = await Quiz.findById(id);
    //console.log(id, quiz)
    return quiz;
  } catch (err) {
    return res.send(`couldnt find quiz with id ${id}`)
  }
};
exports.updateQuizById = async  (id, document, options) =>{
  try {
    const quiz = await Quiz.findByIdAndUpdate(id, document, options)
    return quiz
  } catch (error) {
    console.log(error)
  }
}
exports.deleteQuizById = async (id) =>{
  try {
    const quiz = await Quiz.findByIdAndDelete(id)
    console.log(quiz)
    return quiz
  } catch (error) {
    console.log(error)
  }
}