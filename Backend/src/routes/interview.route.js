import {Router} from 'express'
import {GenInterviewReport, GetAllReports, GetReportById,generateresumepdf} from '../controllers/interview.controller.js'
import multer from "multer";

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

const InterviewRouter = Router()

InterviewRouter.post('/generate',upload.single("resume"),GenInterviewReport )
InterviewRouter.get('/reports/:id',GetReportById)
InterviewRouter.get('/reports',GetAllReports)
InterviewRouter.post('/reports/pdf/:id',generateresumepdf)

export default InterviewRouter