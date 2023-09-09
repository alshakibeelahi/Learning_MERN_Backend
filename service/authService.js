const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
require('dotenv').config()

exports.login = async (data)=>{
  try {
    console.log(data)
    const user = await User.findOne({
      username:data.username
    }).exec()
    if(user && user._id){
      const isValidPassword = await bcrypt.compare(data.password, user.password)
      console.log(isValidPassword, user.password)
      if(isValidPassword){
        const userObject = {
          username: user.username,
          role:user.role
        }
        const accessToken = jwt.sign(userObject, process.env.JWT_SECRET,{
          expiresIn: process.env.JWT_EXPIRES_AT
        });
        
        return {accessToken, user}
      }
      else{
        throw createError('User not found')
      }
    }
    else{
      throw createError(404, 'User not found')
    }
  } catch (error) {
    
  }
}