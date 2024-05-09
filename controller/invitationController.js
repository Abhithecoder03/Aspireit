const Candidate = require('../models/candidates');

async function sendInvitation(req, res) {
    try {
        const candidateData = req.body;
        const newCandidate = await Candidate.create(candidateData);
        res.status(201).json(newCandidate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPendingInvitations(req, res) {
    try {
        // Here you can implement the logic to retrieve pending invitations
        const pendingInvitations = await Candidate.find({ invitationStatus: 'pending' });
        res.status(200).json(pendingInvitations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    sendInvitation,
    getPendingInvitations
};
