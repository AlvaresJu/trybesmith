import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IAuthData } from '../interfaces/user';
import HttpException from './httpException';

dotenv.config();

export default class JwtAuth {
  jwtSecret = process.env.JWT_SECRET as string;

  jwtConfig = { expiresIn: '7d' };

  creteToken(data: IAuthData): string {
    const token = jwt.sign(data, this.jwtSecret, this.jwtConfig);
    return token;
  }

  validateToken(token: string): number {
    try {
      const { id } = jwt.verify(token, this.jwtSecret) as IAuthData;
      return id;
    } catch (_e) {
      throw new HttpException(401, 'Invalid token');
    }
  }
}
