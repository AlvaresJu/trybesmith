import express from 'express';
import OrderController from '../controllers/order.controller';

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get('/', (req, res) => orderController.getAllWithProducts(req, res));

export default orderRouter;
