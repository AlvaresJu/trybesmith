import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  async getAllWithProducts(_req: Request, res: Response) {
    const { statusCode, result } = await this.orderService.getAllWithProducts();
    return res.status(statusCode).json(result);
  }
}
