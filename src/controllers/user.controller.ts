import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  async insert(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    const { statusCode, result } = await this.userService.insert({
      username, classe, level, password });
    return res.status(statusCode).json({ token: result });
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const { statusCode, result } = await this.userService.login(username, password);
    return res.status(statusCode).json({ token: result });
  }
}
