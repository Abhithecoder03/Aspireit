// controllers/responseController.js

import Assessment from '../models/assessment.js';
import Response from '../models/candidateResponse.js';

export const createResponse = async (req, res) => {
  try {
    const { responses, assessmentId, candidateId } = req.body;

    // Find the assessment by ID to get the questions
    const assessment = await Assessment.findById(assessmentId).populate('questions');
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    // Calculate the score based on the responses
    let score = 0;
    responses.forEach((response, index) => {
      // Get the accepted keywords for the current question
      const acceptedKeywords = assessment.questions[index].accepted_keywords;

      // Check if any of the accepted keywords match the candidate's response
      if (acceptedKeywords.some(keyword => response.includes(keyword))) {
        score += 1;
      }
    });

    // Create a new response
    const newResponse = new Response({
      responses,
      score,
      assessment: assessmentId,
      candidate: candidateId,
    });

    // Save the response
    await newResponse.save();

    res.status(201).json({ message: 'Response created successfully', response: newResponse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getResponse = async (req, res) => {
  try {
    const { assessmentId, candidateId } = req.params;

    // Find responses for the specified assessment and candidate
    const responses = await Response.find({ assessment: assessmentId, candidate: candidateId });

    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
