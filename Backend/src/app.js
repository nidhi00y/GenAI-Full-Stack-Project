import express from 'express';
import userRouter from './routes/user.route.js';
import cookies from 'cookie-parser';
import cors from 'cors';
import InterviewRouter from './routes/interview.route.js';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookies());

app.use('/user', userRouter);
app.use('/interview',InterviewRouter);

export default app;