import express from 'express';
import UserController from '../controllers/user.controller';
import validateLoginFields from '../middlewares/loginFields.middleware';

const loginRouter = express.Router();

const userController = new UserController();

loginRouter.post('/', validateLoginFields, (req, res) => userController.login(req, res));

export default loginRouter;
