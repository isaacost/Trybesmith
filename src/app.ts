import express from 'express';
import ProductRouter from './routes/product.route';
import UserRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/', ProductRouter);
app.use('/', UserRouter);

export default app;
