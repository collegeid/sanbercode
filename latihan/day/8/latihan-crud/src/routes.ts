import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

router.get('/product.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

router.get('/category.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'category.html'));
});

export default router;
