const mongoose = require("mongoose");
const {amenities,Resident} = require('../models/residentModel')
console.log(amenities)
exports.addResident = async (residentInfo) => {
  try {
    console.log(residentInfo)
    const newResident = new Resident(residentInfo);
    await newResident.save();
    return newResident;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getAllResident = async (e) => {
  try {
    const residents = await Resident.find();
    return residents;
  } catch (err) {
    console.error(err);
    return null;
  }
};
exports.getResidentById = async (id) => {
  try {
    const resident = await Resident.findById(id);
    //console.log(id, resident)
    return resident;
  } catch (err) {
    return res.send(`couldnt find resident with id ${id}`)
  }
};
exports.updateResidentById = async  (id, document, options) =>{
  try {
    const resident = await Resident.findByIdAndUpdate(id, document, options)
    return resident
  } catch (error) {
    console.log(error)
  }
}
exports.deleteResidentById = async (id) =>{
  try {
    const resident = await Resident.findByIdAndDelete(id)
    console.log(resident)
    return resident
  } catch (error) {
    console.log(error)
  }
}