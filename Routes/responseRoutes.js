// routes/responseRoutes.js
const express = require('express');
const router = express.Router();
const responseController = require('../controller/responseController');

// Create a new response
router.post('/createresponse', responseController.createResponse);

// Get responses for a specific assessment and candidate
router.get('/:assessmentId/:candidateId', responseController.getResponse);

module.exports = router;
