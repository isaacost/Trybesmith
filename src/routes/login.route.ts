import { Router } from 'express';

import UserController from '../controllers/user.controller';
import LoginMiddleware from '../middlewares/logign.middleware';

const router = Router();

const controller = new UserController();

router.use(LoginMiddleware.validate);

router.post('/login', controller.login);

export default router;