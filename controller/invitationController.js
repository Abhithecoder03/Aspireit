import Candidate from '../models/candidates.js';
import Assessment from '../models/assessment.js';

export async function sendInvitation(req, res) {
  try {
    const { candidateId, assessmentId } = req.body;

    // Check if candidate and assessment exist
    const candidate = await Candidate.findById(candidateId);
    const assessment = await Assessment.findById(assessmentId);
    if (!candidate || !assessment) {
      return res.status(404).json({ message: 'Candidate or assessment not found' });
    }

    // Create invitation and update candidate's tests_taken field
    candidate.tests_taken.push(assessmentId);
    await candidate.save();

    // Update assessment's candidate field
    assessment.candidate = candidateId;
    await assessment.save();

    res.status(201).json({ message: 'Invitation sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getPendingInvitations(req, res) {
  try {
    const invitations = await Assessment.find().populate('candidate').populate('questions');
    res.json(invitations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



// const Candidate = require('../models/candidates');
// const Assessment = require('../models/assessment');

// async function CreateCandidate(req, res) {
//     try {
//         const candidateData = req.body;
//         const newCandidate = await Candidate.create(candidateData);
//         res.status(201).json(newCandidate);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }



// module.exports = {
//     sendInvitation,
//     getPendingInvitations
// };

// async function sendInvitation(req,res){
//     try {
//     const { candidateId, assessmentId } = req.body;

//     // Check if candidate and assessment exist
//     const candidate = await Candidate.findById(candidateId);
//     const assessment = await Assessment.findById(assessmentId);
//     if (!candidate || !assessment) {
//       return res.status(404).json({ message: 'Candidate or assessment not found' });
//     }

//     // Create invitation and update candidate's tests_taken field
//     candidate.tests_taken.push(assessmentId);
//     await candidate.save();

//     // Update assessment's candidate field
//     assessment.candidate = candidateId;
//     await assessment.save();

//     res.status(201).json({ message: 'Invitation sent successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// async function getPendingInvitations(req, res) {try {
//     const invitations = await Assessment.find().populate('candidate').populate('questions');
//     res.json(invitations);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }}