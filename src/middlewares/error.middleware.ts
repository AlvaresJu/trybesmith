import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/httpException';

function errorMiddleware(err: HttpException, _req: Request, res: Response, _next: NextFunction) {
  const { statusCode, message } = err;
  console.log(`Error: ${message}`);
  res.status(statusCode || 500).json({ message });
}

export default errorMiddleware;
