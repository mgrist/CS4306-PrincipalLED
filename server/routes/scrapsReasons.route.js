import express from 'express';
import { getReasons, createReason, deleteReason } from '../controllers/scrapReasons.controller.js';

const router = express.Router();

router.get('/get-reasons', getReasons);
router.delete('/delete-reason', deleteReason);
router.post('/new-reason', createReason);
//router.put('/edit-reason', editReason);

export default router;