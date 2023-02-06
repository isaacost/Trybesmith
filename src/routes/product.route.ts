import { Router } from 'express';

import ProductController from '../controllers/product.controller';

const router = Router();

const controller = new ProductController();

router.post('/products', controller.create);

export default router;
