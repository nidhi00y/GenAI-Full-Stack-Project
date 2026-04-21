import mongoose from 'mongoose';
import {Router} from 'express';
import userModel from '../models/user.model.js';
import {Register,Login} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/register', Register)
userRouter.post('/login', Login)


export default userRouter;



