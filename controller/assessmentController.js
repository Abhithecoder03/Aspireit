// controllers/assessmentController.js
const Assessment = require('../models/assessment');
const Question = require('../models/question');

exports.createQuestion = async (req, res) => {
  try {
    const assessmentId = req.params.id;
    const { question, acceptedKeywords, difficulty, topic } = req.body;

    // Find the assessment by ID
    const assessment = await Assessment.findById(assessmentId);
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    // Create a new question and associate it with the assessment
    const newQuestion = new Question({
      question,
      accepted_keywords: acceptedKeywords,
      difficulty,
      topic,
      assessment: assessmentId,
    });
    await newQuestion.save();

    // Add the question to the assessment
    assessment.questions.push(newQuestion._id);
    await assessment.save();

    res.status(201).json({ message: 'Verbal assessment question created successfully', question: newQuestion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAssessment = async (req, res) => {
  try {
    const assessmentId = req.params.id;

    // Find the assessment by ID and populate questions
    const assessment = await Assessment.findById(assessmentId).populate('questions');
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    res.json(assessment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//create assessment
exports.createAssessment = async (req, res) => {
    try {
      const { domain, attempts, duration, candidateId } = req.body;
  
      // Create a new assessment
      const assessment = new Assessment({
        domain,
        attempts,
        duration,
        candidate: candidateId,
      });
  
      // Save the assessment
      await assessment.save();
  
      res.status(201).json({ message: 'Assessment created successfully', assessment });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
