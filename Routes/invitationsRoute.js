// routes/invitations.js

const express = require('express');
const router = express.Router();
const invitationsController = require('../controller/invitationController')

router.post('/invitations', invitationsController.sendInvitation);
router.get('/invitations', invitationsController. getPendingInvitations);

module.exports = router;
