import express from 'express';
import { getReasons, createReason, deleteReason, getReasonId } from '../controllers/scrapReasons.controller.js';

const router = express.Router();

router.get('/get-reasons', getReasons);
router.get('/get-reason-id', getReasonId);
router.delete('/delete-reason', deleteReason);
router.post('/new-reason', createReason);
//router.put('/edit-reason', editReason);

export default router;