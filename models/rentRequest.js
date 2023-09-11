const mongoose = require('mongoose')

const rentRequestSchema = new mongoose.Schema({
  cusName:{
    type: String,
    required: true,
    trim: true
  },
  carId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Car'
  }
})

const RentRequest = mongoose.model("RentRequest", rentRequestSchema);

module.exports = RentRequest;