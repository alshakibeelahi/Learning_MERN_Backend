const mongoose = require("mongoose");
const RentRequest = require('../models/rentRequest')

exports.addRentRequest = async (rentRentRequestInfo) => {
  try {
    const newRentRequest = new RentRequest(rentRentRequestInfo);
    await newRentRequest.save();
    return newRentRequest;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getAll = async (e) => {
  try {
    const rentRentRequests = await RentRequest.find();
    return rentRentRequests;
  } catch (err) {
    console.error(err);
    return null;
  }
};
exports.getRequestById = async (id) => {
  try {
    const rentRentRequest = await RentRequest.findById(id);
    console.log(id, rentRentRequest)
    return rentRentRequest;
  } catch (err) {
    return res.send(`couldnt find rentRentRequest with id ${id}`)
  }
};
exports.updateById = async  (id, document, options) =>{
  try {
    const rentRentRequest = await RentRequest.findByIdAndUpdate(id, document, options)
    return rentRentRequest
  } catch (error) {
    console.log(error)
  }
}
exports.deleteById = async (id) =>{
  try {
    const rentRentRequest = await RentRequest.findByIdAndDelete(id)
    console.log(rentRentRequest)
    return rentRentRequest
  } catch (error) {
    console.log(error)
  }
}