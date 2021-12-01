import express from 'express';
import { getOrders, createOrder } from '../controllers/workOrders.controller.js';

const router = express.Router();

router.get('/get-orders', getOrders);
router.post('/new-order', createOrder);

export default router;