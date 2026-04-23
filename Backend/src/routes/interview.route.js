import {Router} from 'express'
import {GenInterviewReport} from '../controllers/interview.controller.js'

const InterviewRouter = Router()

InterviewRouter.post('/generate',GenInterviewReport )


export default InterviewRouter