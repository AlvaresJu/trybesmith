import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/httpException';

export default function validateLoginFields(req: Request, _res: Response, next: NextFunction) {
  const loginFields: string[] = ['username', 'password'];
  const loginData: { [key: string]: string } = { ...req.body };
  loginFields.forEach((field: string) => {
    if (!loginData[field]) throw new HttpException(400, `"${field}" is required`);
  });

  return next();
}
