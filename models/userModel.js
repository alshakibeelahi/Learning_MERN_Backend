const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  username:{
    type: String,
    required:true,
    trim: true
  },
  password:{
    type: String,
    required: false,
    trim: true
  },
  image:{
    type: String,
    required: false
  },
  role:{
    type: String,
    enum:['admin', 'employee'],
    dafault:'admin'
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;