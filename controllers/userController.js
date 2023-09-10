const { addUser, getAll, getById, deleteById, updateById } = require('../service/userService')
const bcrypt = require("bcrypt");
const { unlink } = require("fs");
const path = require("path");
//Working with files

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = {
      ...req.body,
      image: req.files[0].filename,
      password: hashedPassword,
    }
    const user = await addUser(data)
    if(user!=null){
      res.status(200).json({ message: "add successfull" })
    }
    else{
      res.status(500).json({message:"something went wrong"})
    }
    // console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
const getUser = async (req, res) => {

  try {
    const users = await getAll()
    users.forEach(user => {
      const url = `http://localhost:3000/uploads/users/${user.image}`;
      user.image = url;
    });
    res.status(200).json({ users })
  } catch (error) {
    console.log(error)
  }
}

const getUserById = async (req, res) => {
  console.log('hittted'+req.params.id)
  try {
    const id = req.params.id
    const user = await getById(id)
    const url = `http://localhost:3000/uploads/users/`+user.image
    user.image=url
    res.status(200).json({ user })
  } catch (err) {

  }
}
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getById(id);
    //console.log(id, user)
    if (user != null) {
      const newUser = {
        name: req.body.name
      };
      const options = { new: true };
      //console.log(newUser)
      const updatedUser = await updateById(id, newUser, options);
      res.status(200).json({ user: updatedUser });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    const user = await deleteById(id)
    res.status(200).json({ user })
  } catch (err) {

  }
}

module.exports = { createUser, getUser, updateUser, getUserById, deleteUser }