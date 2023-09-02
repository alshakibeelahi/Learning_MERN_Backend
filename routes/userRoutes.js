const express = require('express')
const router = express.Router()

const {createUser, getUser} = require('../controllers/userController')

router.post('/adduser', createUser)
router.get('/getusers',getUser)

module.exports = router