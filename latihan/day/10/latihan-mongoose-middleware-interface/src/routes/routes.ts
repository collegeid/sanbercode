import { Router } from 'express';
import productsController from '../controllers/product.controller';
import categoriesController from '../controllers/categories.controller';

const router = Router();

// CRUD Products
router.get('/products', productsController.findAll);
router.post('/products', productsController.create);
router.get('/products/:id', productsController.findOne);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.delete);

// CRUD Categories
router.get('/categories', categoriesController.findAll);
router.post('/categories', categoriesController.create);
router.get('/categories/:id', categoriesController.findOne);
router.put('/categories/:id', categoriesController.update);
router.delete('/categories/:id', categoriesController.delete);

export default router;
