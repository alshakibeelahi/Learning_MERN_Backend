const { addQuiz, getQuizAl, deleteQuizById, updateQuizById, getAllQuiz, getQuizById } = require('../service/quizService')
const createQuiz = async (req, res) => {
  try {
    console.log(req.body)
    const quiz = await addQuiz(req.body)
    if(quiz!=null){
      res.status(200).json({ message: "add successfull" })
    }
    else{
      res.status(500).json({message:"something went wrong"})
    }
    // console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
const getQuiz = async (req, res) => {

  try {
    const quizs = await getAllQuiz()
    res.status(200).json({ quizs })
  } catch (error) {
    console.log(error)
  }
}

const getById = async (req, res) => {
  try {
    const id = req.params.id
    const quiz = await getQuizById(id)
    console.log(req.body.answer, quiz.answer)
    if(req.body.answer==quiz.answer){
      res.status(200).json(true)
    }
    res.status(200).json(false)
  } catch (err) {
    res.status(500)
  }
}
const updateQuiz = async (req, res) => {
  try {
    const id = req.params.id;
    const quiz = await getQuizById(id);
    //console.log(id, quiz)
    if (quiz != null) {
      const newQuiz = {
        name: req.body.name
      };
      const options = { new: true };
      //console.log(newQuiz)
      const updatedQuiz = await updateById(id, newQuiz, options);
      res.status(200).json({ quiz: updatedQuiz });
    } else {
      res.status(400).json({ message: "Quiz not found" });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const deleteQuiz = async (req, res) => {
  try {
    const id = req.params.id
    const quiz = await deleteQuizById(id)
    res.status(200).json({ quiz })
  } catch (err) {

  }
}

module.exports = { createQuiz, getQuiz, updateQuiz, getById, deleteQuiz }