import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IAuthData } from '../interfaces/user';

dotenv.config();

export default class JwtAuth {
  jwtSecret = process.env.JWT_SECRET;

  jwtConfig = { expiresIn: '7d' };

  creteToken(data: IAuthData): string {
    const token = jwt.sign(data, this.jwtSecret as string, this.jwtConfig);
    return token;
  }
}