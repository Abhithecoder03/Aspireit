// controllers/responseController.js
const Response = require('../models/candidateResponse');

exports.createResponse = async (req, res) => {
  try {
    const { totalQuestions, score, timeTaken, assessmentId, candidateId } = req.body;

    // Create a new response
    const response = new Response({
      total_questions: totalQuestions,
      score: score,
      time_taken: timeTaken,
      assessment: assessmentId,
      candidate: candidateId,
    });

    // Save the response
    await response.save();

    res.status(201).json({ message: 'Response created successfully', response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getResponses = async (req, res) => {
  try {
    const { assessmentId, candidateId } = req.params;

    // Find responses for the specified assessment and candidate
    const responses = await Response.find({ assessment: assessmentId, candidate: candidateId });

    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
