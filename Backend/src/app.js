import express from 'express';
import userRouter from './routes/user.route.js';
import cookies from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookies());

app.use('/user', userRouter);

export default app;