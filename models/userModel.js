const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  status:{
    type: Boolean,
    required: false
  }
})

module.exports = userSchema;