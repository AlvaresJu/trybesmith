import express from 'express';
import UserController from '../controllers/user.controller';
import validateUserFields from '../middlewares/userFields.middleware';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/', validateUserFields, (req, res) => userController.insert(req, res));

export default userRouter;
