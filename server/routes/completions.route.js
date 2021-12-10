import express from 'express';
import { getCompletions, createCompletion, getOrderCompletions, getOpCompletions } from '../controllers/completions.controller.js';

const router = express.Router();

router.get('/get-completions', getCompletions);
router.get('/get-order-completions', getOrderCompletions);
router.get('/get-op-completions', getOpCompletions);
router.post('/new-completion', createCompletion);

export default router;