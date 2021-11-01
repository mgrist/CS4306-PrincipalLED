import express from 'express';
import { getOrders, createOrder } from '../controllers/workOrders.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);

export default router;