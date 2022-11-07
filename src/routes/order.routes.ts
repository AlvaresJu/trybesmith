import express from 'express';
import OrderController from '../controllers/order.controller';
import validateOrderFields from '../middlewares/orderFields.middleware';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', (req, res) => orderController.getAllWithProducts(req, res));
orderRouter.post('/', validateOrderFields, (req, res) => orderController.insert(req, res));

export default orderRouter;
