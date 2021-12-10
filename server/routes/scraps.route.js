import express from 'express';
import { getScraps, getOrderScraps, createScrap, deleteScrap } from '../controllers/scraps.controller.js';

const router = express.Router();

router.get('/get-scraps', getScraps);
router.get('/get-order-scraps', getOrderScraps)
router.delete('/delete-scrap', deleteScrap);
router.post('/new-scrap', createScrap);
//router.put('/edit-scrap', editScrap);

export default router;