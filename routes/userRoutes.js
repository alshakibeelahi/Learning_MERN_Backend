const express = require('express')
const router = express.Router()

const {createUser, getUser, updateUser, getUserById, deleteUser} = require('../controllers/userController')
const {imageUploads} = require('../middleware/users/imageUploads')
const {addUserValidators,addUserValidationHandler} = require('../middleware/users/userValidation')
const {userAuthentication} = require('../middleware/users/userAuthentication')

router.post('/adduser', userAuthentication,imageUploads,addUserValidators,addUserValidationHandler, createUser)
router.get('/getusers', userAuthentication, getUser)
router.get('/getuser/:id', userAuthentication, getUserById)
router.put('/updateuser/:id', userAuthentication, updateUser)
router.delete('/deleteuser/:id', userAuthentication, deleteUser)

module.exports = router