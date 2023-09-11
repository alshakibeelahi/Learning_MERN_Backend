const express = require('express')
const router = express.Router()

const { createRentRequest, getRentRequest, updateRentRequest, getRentRequestById, deleteRentRequest } = require('../controllers/rentRequestController')

router.post('/',createRentRequest)
router.get('/', getRentRequest)
router.get('/:id', getRentRequestById)
router.put('/:id', updateRentRequest)
router.delete('/:id', deleteRentRequest)

module.exports = router