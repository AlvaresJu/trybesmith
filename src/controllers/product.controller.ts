import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async insert(req: Request, res: Response) {
    const { name, amount } = req.body;
    const { statusCode, result } = await this.productService.insert({ name, amount });
    return res.status(statusCode).json(result);
  }

  async getAll(_req: Request, res: Response) {
    const { statusCode, result } = await this.productService.getAll();
    return res.status(statusCode).json(result);
  }
}
