import {Router} from 'express'
import GenerateInterviewReport from '../controllers/interview.controller'

const InterviewRouter = Router()

InterviewRouter.post('/generate',GenerateInterviewReport)


export default InterviewRouter