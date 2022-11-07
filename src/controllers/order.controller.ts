import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import HttpException from '../utils/httpException';
import JwtAuth from '../utils/jwtAuth';

export default class OrderController {
  orderService = new OrderService();

  jwtAuth = new JwtAuth();

  validateAuth(token: string | undefined): number {
    if (!token) throw new HttpException(401, 'Token not found');

    const userId = this.jwtAuth.validateToken(token);
    return userId;
  }

  async insert(req: Request, res: Response) {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const userId = this.validateAuth(authorization);

    const { statusCode, result } = await this.orderService.insert(productsIds, userId);
    return res.status(statusCode).json(result);
  }

  async getAllWithProducts(_req: Request, res: Response) {
    const { statusCode, result } = await this.orderService.getAllWithProducts();
    return res.status(statusCode).json(result);
  }
}
