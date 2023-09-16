const express = require('express')
const router = express.Router()

const { createResident, getResident, updateResident, getResidentById, deleteResident } = require('../controllers/residentController')

router.post('/',createResident)
router.get('/', getResident)
router.get('/:id', getResidentById)
router.put('/:id', updateResident)
router.delete('/:id', deleteResident)

module.exports = router