import { Router } from 'express';
import productsController from '../controllers/product.controller';
import categoriesController from '../controllers/categories.controller';
import authController from "../controllers/auth.controller";
import authMiddleware from "../middleware/auth.middleware";
import aclMiddlware from "../middleware/acl.middleware";

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

//JWT Auth
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.get(
    "/auth/me",
    [authMiddleware, aclMiddlware(["admin"])],
    authController.me
  );
router.put("/auth/profile", authMiddleware, authController.profile);
export default router;
