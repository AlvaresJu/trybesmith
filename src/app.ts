import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import orderRouter from './routes/order.routes';
import productRouter from './routes/product.routes';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

app.use(errorMiddleware);

export default app;
