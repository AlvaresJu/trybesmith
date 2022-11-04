import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpException';

export default function validateProductFields(req: Request, _res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  if (!name) throw new HttpException(400, '"name" is required');
  if (!amount) throw new HttpException(400, '"amount" is required');

  return next();
}
