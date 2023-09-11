const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  reqCount:{
    type: Number,
    required:false,
    default:0
  }
})

const Car = mongoose.model("Car", carSchema);

module.exports = Car;