import { Router } from 'express';
import { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory } from '../controllers/categories.controller';

const router = Router();

router.post('/categories', createCategory);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;
