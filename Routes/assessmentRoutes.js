// routes/assessmentRoutes.js
const express = require('express');
const router = express.Router();
const assessmentController = require('../controller/assessmentController');

// Create a new verbal assessment question
router.post('/:id/questions', assessmentController.createQuestion);

// Retrieve details of a specific assessment
router.get('/:id', assessmentController.getAssessment);

router.post('/create', assessmentController.createAssessment);

module.exports = router;
