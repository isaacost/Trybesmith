import express from 'express';
import ProductRouter from './routes/product.route';
import UserRouter from './routes/user.route';
import OrderRouter from './routes/order.route';
import LoginRouter from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/', ProductRouter);
app.use('/', UserRouter);
app.use('/', OrderRouter);
app.use('/', LoginRouter);

export default app;
