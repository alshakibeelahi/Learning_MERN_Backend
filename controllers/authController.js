const { login } = require('../service/authService')
require('cookie-parser')
require('dotenv').config()

const checkUser = async (req, res) => {
  try {
    const user = await login(req.body)
    if(user!=null){
      res.cookie(process.env.COOKIE_SECRET, user.token, {
        maxAge: process.env.JWT_EXPIRES_AT,
        httpOnly: true,
        signed: true,
      });
      res.status(200).json(user)
    }
    else{
      res.status(404).json({message:"User not found"})
    }
  } catch (error) {
    console.log(error)
  }
}

const logout = (req, res)=>{
  res.clearCookie(process.env.COOKIE_SECRET)
  res.status(200).json({message:"logout successfull"})
}

module.exports={checkUser, logout}