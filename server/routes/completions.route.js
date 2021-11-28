import express from 'express';
import { getCompletions, createCompletion } from '../controllers/completions.controller.js';

const router = express.Router();

router.get('/get-completions', getCompletions);
router.post('/new-completion', createCompletion);

export default router;