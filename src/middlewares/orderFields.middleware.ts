import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpException';

export default function validateOrderFields(req: Request, _res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  if (!productsIds) throw new HttpException(400, '"productsIds" is required');

  return next();
}
