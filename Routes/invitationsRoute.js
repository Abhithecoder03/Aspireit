import express from 'express';
import { sendInvitation, getPendingInvitations } from '../controller/invitationController.js';

const router = express.Router();

router.post('/invitations', sendInvitation);
router.get('/invitations', getPendingInvitations);

export default router;
