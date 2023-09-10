const mongoose = require("mongoose");
const User = require('../models/userModel')

exports.addUser = async (userInfo) => {
  try {
    const newUser = new User(userInfo);
    await newUser.save();
    return newUser;
  } catch (err) {
    console.error(err);
    return null;
  }
};

exports.getAll = async (e) => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(err);
    return null;
  }
};
exports.getById = async (id) => {
  try {
    const user = await User.findById(id);
    console.log(id, user)
    return user;
  } catch (err) {
    return res.send(`couldnt find user with id ${id}`)
  }
};
exports.updateById = async  (id, document, options) =>{
  try {
    const user = await User.findByIdAndUpdate(id, document, options)
    return user
  } catch (error) {
    console.log(error)
  }
}
exports.deleteById = async (id) =>{
  try {
    const user = await User.findByIdAndDelete(id)
    console.log(user)
    return user
  } catch (error) {
    console.log(error)
  }
}
