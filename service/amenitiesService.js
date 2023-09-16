const mongoose = require("mongoose");
const Amenities = require('../models/aminitiesModel')

exports.addAmenities = async (amenitiesInfo) => {
  try {
    const newAmenities = new Amenities(amenitiesInfo);
    await newAmenities.save();
    return newAmenities;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getAllAmenities = async (e) => {
  try {
    const amenitiess = await Amenities.find();
    return amenitiess;
  } catch (err) {
    console.error(err);
    return null;
  }
};
exports.getAmenitiesById = async (id) => {
  try {
    const amenities = await Amenities.findById(id);
    //console.log(id, amenities)
    return amenities;
  } catch (err) {
    return res.send(`couldnt find amenities with id ${id}`)
  }
};
exports.updateAmenitiesById = async  (id, document, options) =>{
  try {
    const amenities = await Amenities.findByIdAndUpdate(id, document, options)
    return amenities
  } catch (error) {
    console.log(error)
  }
}
exports.deleteAmenitiesById = async (id) =>{
  try {
    const amenities = await Amenities.findByIdAndDelete(id)
    console.log(amenities)
    return amenities
  } catch (error) {
    console.log(error)
  }
}