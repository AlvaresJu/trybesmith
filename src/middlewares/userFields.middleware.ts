import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user';
import HttpException from '../utils/httpException';

export default function validateUserFields(req: Request, _res: Response, next: NextFunction) {
  const userFields: string[] = ['username', 'classe', 'level', 'password'];
  const user: { [key: string]: IUser } = { ...req.body };
  userFields.forEach((field: string) => {
    if (user[field] === undefined) throw new HttpException(400, `"${field}" is required`);
  });

  return next();
}
