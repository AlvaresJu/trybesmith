import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../interfaces/product';
import HttpException from '../utils/httpException';

export default function validateProductFields(req: Request, _res: Response, next: NextFunction) {
  const productFields: string[] = ['name', 'amount'];
  const product: { [key: string]: IProduct } = { ...req.body };
  productFields.forEach((field: string) => {
    if (!product[field]) throw new HttpException(400, `"${field}" is required`);
  });

  return next();
}
