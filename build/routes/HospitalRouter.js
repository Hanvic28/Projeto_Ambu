import express from 'express';
import { HospitalController } from '../controllers/HospitalController.js';
const hospitalController = new HospitalController();
const router = express.Router();
router.get('/hospital', hospitalController.selecionaHospital);
router.post('/hospital', hospitalController.insereHospital);
export default router;
