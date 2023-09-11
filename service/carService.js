const mongoose = require("mongoose");
const Car = require('../models/carModel')

exports.addCar = async (carInfo) => {
  try {
    const newCar = new Car(carInfo);
    await newCar.save();
    return newCar;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getAllCar = async (e) => {
  try {
    const cars = await Car.find().sort({ reqCount: 'desc' }).exec();
    return cars;
  } catch (err) {
    console.error(err);
    return null;
  }
};
exports.getCarById = async (id) => {
  try {
    const car = await Car.findById(id);
    console.log(id, car)
    return car;
  } catch (err) {
    return res.send(`couldnt find car with id ${id}`)
  }
};
exports.updateCarById = async  (id, document, options) =>{
  try {
    const car = await Car.findByIdAndUpdate(id, document, options)
    return car
  } catch (error) {
    console.log(error)
  }
}
exports.deleteCarById = async (id) =>{
  try {
    const car = await Car.findByIdAndDelete(id)
    console.log(car)
    return car
  } catch (error) {
    console.log(error)
  }
}