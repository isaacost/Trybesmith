import express from 'express';
import ProductRouter from './routes/product.route';
import UserRouter from './routes/user.route';
import OrderRouter from './routes/order.route';
import LoginRouter from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
app.use('/login', LoginRouter);

export default app;
