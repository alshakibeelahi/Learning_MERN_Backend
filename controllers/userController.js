const { addUser, getAll, getById, deleteById, updateById } = require('../service/userService')
//Working with files

const createUser = async (req, res) => {

  try {
    const user = addUser(req.body)
    res.status(200).json({ message: "add successfull" })
    // console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
const getUser = async (req, res) => {

  try {
    const users = await getAll()
    res.status(200).json({ users })
    // console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const user = await getById(id)
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