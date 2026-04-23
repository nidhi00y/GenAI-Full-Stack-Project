import express from 'express'
import interviewReportModel from '../models/interviewreport.model.js';
//to handle pdf files we need multer
//to read pdf files we can use pdf-parse
import multer from 'multer';
import {PDFParse} from 'pdf-parse';
import genrateinterviewReport from '../services/ai.service.js';

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
});

async function GenInterviewReport(req,res){
    const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        try {
            const decoded = jwt.verify(token, config.JWT_SECRET);
            const blacklistedToken = await blacklistTokenModel.findOne({ token });
            if (blacklistedToken) {
                return res.status(401).json({ message: 'Not login' });
            }
            const user = await userModel.findById(decoded.userId).select('-password');
            const {jobDescription,selfDescription} = req.body;
            upload.single("resume")
            const resume = req.file
            const resumeData = await pdfParse(req.file.buffer);
            const result = await genrateinterviewReport({resume: resumeData,selfDescription,jobDescription});
            const interviewReport = await interviewReportModel({
                userId: user._id,
                resume: resumeData.text,
                selfDescription,
                jobDescription,
                ...result
            });
            await interviewReport.save();
            res.status(201).json({ message: 'Interview report generated successfully', report: interviewReport });
        } catch (error) {
            console.error('Error generating interview report:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
}

export {GenInterviewReport};

