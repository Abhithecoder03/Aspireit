import express from 'express';
import { createQuestion, getAssessment, createAssessment } from '../controller/assessmentController.js';

const router = express.Router();

// Create a new verbal assessment question
router.post('/:id/questions', createQuestion);

// Retrieve details of a specific assessment
router.get('/:id', getAssessment);

router.post('/create', createAssessment);

export default router;
