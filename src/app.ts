import express from 'express';
import ProductRouter from './routes/product.route';

const app = express();

app.use(express.json());

app.use('/', ProductRouter);

export default app;
