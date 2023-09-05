const express = require('express')
const router = express.Router()

const { checkUser, logout } = require('../controllers/authController')

router.post('/login', checkUser)
router.get('/logout', logout)
// router.post('/signin', signin)
// router.get('/forgetpassword/:id', forgetpassword)
// router.put('/checkforgetpassword', checkforgetpassword)

module.exports = router