const mongoose = require('mongoose')

const aminities = ['AC', 'WiFi', 'Fridge']
aminities.push('Hello')
const residentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  amenities: [
    {
      name: {
        type:String,
        required: true,
        enum:aminities
      },
      status: {
        type: Boolean,
        required: false,
        default: true
      }
    }
  ],
})

const Resident = mongoose.model("Resident", residentSchema);

module.exports = {Resident, aminities};