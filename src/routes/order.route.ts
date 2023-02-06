import { Router } from 'express';

import OrderController from '../controllers/order.controller';

const router = Router();

const controller = new OrderController();

router.get('/orders', controller.findAll);

export default router;
