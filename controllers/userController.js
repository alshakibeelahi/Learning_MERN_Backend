const mongoose = require('mongoose')
const userSchema = require('../models/userModel')
const User = new mongoose.model("User", userSchema)
const {addUser, getAll} = require('../service/userService')


const createUser = async (req, res) =>{

  try {
    const user = addUser(req.body)
    res.status(200).json({message:"add successfull"})
    // console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
const getUser = async (req, res) =>{

  try {
    const user = await getAll()
    console.log(user)
    res.status(200).json({user})
    // console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {createUser, getUser}