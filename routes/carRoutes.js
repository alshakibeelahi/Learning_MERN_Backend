const express = require('express')
const router = express.Router()

const { createCar, getCar, updateCar, getCarById, deleteCar } = require('../controllers/carController')

router.post('/',createCar)
router.get('/', getCar)
router.get('/:id', getCarById)
router.put('/:id', updateCar)
router.delete('/:id', deleteCar)

module.exports = router