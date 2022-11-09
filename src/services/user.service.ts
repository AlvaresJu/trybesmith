import Joi from 'joi';
import { IServiceUser, IUser } from '../interfaces/user';
import UserModel from '../models/user.model';
import HttpException from '../utils/httpException';
import JwtAuth from '../utils/jwtAuth';

export default class UserService {
  private userModel: UserModel;

  private jwtAuth: JwtAuth;

  private userSchema: Joi.ObjectSchema;

  constructor() {
    this.userModel = new UserModel();
    this.jwtAuth = new JwtAuth();
    this.userSchema = Joi.object({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).required(),
      password: Joi.string().min(8).required(),
    });
  }

  private validateUserData(newUser: IUser): IUser {
    const { error, value } = this.userSchema.validate(newUser);
    if (error) throw new HttpException(422, error.message);

    return value;
  }

  async insert(newUser: IUser): Promise<IServiceUser> {
    const { username, classe, level, password } = this.validateUserData(newUser);

    if (await this.userModel.findByUsername(username)) {
      throw new HttpException(409, 'User already registered');
    }

    const { id } = await this.userModel.create({ username, classe, level, password });
    const token = this.jwtAuth.creteToken({ id, username });
    return { statusCode: 201, result: token };
  }

  async login(username: string, password: string): Promise<IServiceUser> {
    const user = await this.userModel.findByUsername(username);
    if (!user || user.password !== password) {
      throw new HttpException(401, 'Username or password invalid');
    }

    const token = this.jwtAuth.creteToken({ id: user.id, username });
    return { statusCode: 200, result: token };
  }
}
