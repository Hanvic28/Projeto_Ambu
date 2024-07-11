const express = require('express')
const HospitalController = require('../controllers/HospitalController.js')

const hospitalController = new HospitalController()


const router = express.Router()

router.get('/hospital', hospitalController.selecionaHospital)
  
router.post('/hospital', hospitalController.insereHospital)

  module.exports = router