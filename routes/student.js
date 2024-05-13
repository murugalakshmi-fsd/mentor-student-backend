import express from 'express';
import studentController from '../controller/student.js';
const router = express.Router()
router.get('/',studentController.getAllStudent);
router.get('/:id',studentController.getOneStudent);
router.post('/',studentController.addStudent);
router.put('/:id',studentController.editStudent);
router.delete('/:id',studentController.deleteStudent);

export default router