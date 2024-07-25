import { Router } from 'express';
import { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } from '../controllers/products.controller';

const router = Router();

router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
