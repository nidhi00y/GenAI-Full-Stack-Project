import mongoose from 'mongoose';
import {Router} from 'express';
import userModel from '../models/user.model.js';
import {Register,Login,Logout} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/register', Register)
userRouter.post('/login', Login)
userRouter.get('/logout', Logout)

export default userRouter;



