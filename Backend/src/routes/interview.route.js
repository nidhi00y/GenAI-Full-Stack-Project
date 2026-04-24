import {Router} from 'express'
import {GenInterviewReport, GetAllReports, GetReportById} from '../controllers/interview.controller.js'
import multer from "multer";

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

const InterviewRouter = Router()

InterviewRouter.post('/generate',upload.single("resume"),GenInterviewReport )
InterviewRouter.get('/reports/:interviewId',GetReportById)
InterviewRouter.get('/reports',GetAllReports)


export default InterviewRouter