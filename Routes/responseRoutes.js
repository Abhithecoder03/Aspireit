// routes/responseRoutes.js
import express from 'express';
const router = express.Router();
import { createResponse, getResponse} from '../controller/responseController.js';

// Create a new response
router.post('/createresponse', createResponse);

// Get responses for a specific assessment and candidate
router.get('/:assessmentId/:candidateId', getResponse);

export default router;
