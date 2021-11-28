import express from 'express';
import { getStages, createStage, deleteStage, editStage } from '../controllers/stages.controller.js';

const router = express.Router();

router.get('/get-stages', getStages);
router.post('/new-stage', createStage);
router.put('/edit-stage', editStage);
router.delete('/delete-stage', deleteStage);

export default router;