import {Router} from 'express'
import {GenInterviewReport} from '../controllers/interview.controller.js'
import multer from "multer";

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

const InterviewRouter = Router()

InterviewRouter.post('/generate',upload.single("resume"),GenInterviewReport )


export default InterviewRouter