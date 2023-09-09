const express = require('express')
const router = express.Router()

const {createUser, getUser, updateUser, getUserById, deleteUser} = require('../controllers/userController')
const {imageUploads} = require('../middleware/users/imageUploads')
const {addUserValidators,addUserValidationHandler} = require('../middleware/users/userValidation')
const {userAuthentication} = require('../middleware/users/userAuthentication')

router.post('/', userAuthentication,imageUploads,addUserValidators,addUserValidationHandler, createUser)
router.get('/', userAuthentication, getUser)
router.get('/:id', userAuthentication, getUserById)
router.put('/:id', userAuthentication, updateUser)
router.delete('/:id', userAuthentication, deleteUser)

module.exports = router