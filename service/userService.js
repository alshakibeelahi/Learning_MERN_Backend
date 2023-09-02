const mongoose = require("mongoose");
const userSchema = require('../models/userModel');
const User = mongoose.model("User", userSchema);

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
