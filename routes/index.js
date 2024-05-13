import express from 'express';
import indexController from '../controller/index.js';
import userRoutes from './mentor.js';
import studentRoutes from './student.js';
import assignRoutes from './assign.js';

const router = express.Router()

router.get('/',indexController.homePage);

router.use('/mentors',userRoutes);

router.use('/students',studentRoutes);

router.use('/assign',assignRoutes);

export default router

