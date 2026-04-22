import {Router} from 'express'
import {GenerateInterviewReport} from '../controllers/interview.controller.js'

const InterviewRouter = Router()

InterviewRouter.post('/generate',GenerateInterviewReport )


export default InterviewRouter