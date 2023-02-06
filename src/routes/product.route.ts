import { Router } from 'express';

import ProductController from '../controllers/product.controller';

const router = Router();

const controller = new ProductController();

router.get('/products', controller.findAll);
router.post('/products', controller.create);

export default router;
