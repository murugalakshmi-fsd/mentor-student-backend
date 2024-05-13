import express from 'express';
import assignController from '../controller/assign.js';
const router=express.Router();

router.put('/student/:batch/mentor/:id',assignController.assignMultyStudent);

export default router;