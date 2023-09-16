const express = require('express')
const router = express.Router()

const { createAmenities, getAmenities, updateAmenities, getAmenitiesById, deleteAmenities } = require('../controllers/amenitiesController')

router.post('/',createAmenities)
router.get('/', getAmenities)
router.get('/:id', getAmenitiesById)
router.put('/:id', updateAmenities)
router.delete('/:id', deleteAmenities)

module.exports = router