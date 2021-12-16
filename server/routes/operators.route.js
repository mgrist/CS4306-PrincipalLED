import express from 'express';
import { getOperators, getOperatorName, createOperator, deleteOperator, editOperator } from '../controllers/operators.controller.js';

const router = express.Router();

router.get('/get-operators', getOperators);
router.get('/get-operator-name', getOperatorName);
router.post('/new-operator', createOperator);
router.put('/edit-operator', editOperator);
router.delete('/delete-operator', deleteOperator);

export default router;