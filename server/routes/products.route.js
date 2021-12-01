import express from 'express';
import { getProducts, getProduct, createProduct, deleteProduct, editProduct } from '../controllers/products.controller.js';

const router = express.Router();

router.get('/get-products', getProducts);
router.get('/find-product', getProduct);
router.post('/new-product', createProduct);
router.put('/edit-product', editProduct);
router.delete('/delete-product', deleteProduct);

export default router;