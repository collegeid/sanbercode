"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const categories_controller_1 = __importDefault(require("../controllers/categories.controller"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const router = (0, express_1.Router)();
// CRUD Products
router.get('/products', product_controller_1.default.findAll);
router.post('/products', product_controller_1.default.create);
router.get('/products/:id', product_controller_1.default.findOne);
router.put('/products/:id', product_controller_1.default.update);
router.delete('/products/:id', product_controller_1.default.delete);
// CRUD Categories
router.get('/categories', categories_controller_1.default.findAll);
router.post('/categories', categories_controller_1.default.create);
router.get('/categories/:id', categories_controller_1.default.findOne);
router.put('/categories/:id', categories_controller_1.default.update);
router.delete('/categories/:id', categories_controller_1.default.delete);
//JWT Auth
router.post("/auth/login", auth_controller_1.default.login);
router.post("/auth/register", auth_controller_1.default.register);
router.get("/auth/me", auth_controller_1.default.me);
router.put("/auth/profile", auth_middleware_1.default, auth_controller_1.default.profile);
exports.default = router;
