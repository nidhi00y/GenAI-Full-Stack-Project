import express from 'express'
import interviewReportModel from '../models/interviewreport.model.js';
//to handle pdf files we need multer
//to read pdf files we can use pdf-parse
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');
import { generateInterviewReport, generateResumePdf } from '../services/ai.service.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import cookies from 'cookie-parser';
import blacklistTokenModel from '../models/Blacklisttoken.model.js';
import config from '../config/config.js';
import userModel from '../models/user.model.js';

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
            const resumeData = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
            const result = await generateInterviewReport({resume: resumeData.text,selfDescription,jobDescription});
            console.log("hello",result)
            const interviewReport = await interviewReportModel.create({
                user: user._id,
                resume: resumeData.text,
                selfDescription,
                jobDescription,
                matchScore: x.matchScore,
                technicalQuestions: x.technicalQuestions,
                behavioralQuestions: x.behavioralQuestions,
                skillGaps: x.skillGaps,
                preparationPlan: x.preparationPlan,
                title: x.title,
            });
            await interviewReport.save();
            res.status(201).json({ message: 'Interview report generated successfully', report: interviewReport });
        } catch (error) {
            console.error('Error generating interview report:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
}

async function GetReportById(req,res){
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
            const id = req.params;
            const report = await interviewReportModel.findOne({_id:id,user:req.user.id})
            if(!report){
                console.log("Report not found");
            }
            return res.json({message:"Report fetched successfully",report})
        }catch(error){
            console.log("Erorr while fetching report",error);
        }
}

async function GetAllReports(req,res){
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
            const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

            res.status(200).json({
                message: "Interview reports fetched successfully.",
                interviewReports
            })
        }catch(error){
            console.log("Erorr while fetching reports",error);
        }
}

async function generateresumepdf(req,res){
    const {id} = req.params

    const intreport = await interviewReportModel.findById(id)
    if(!intreport){
        return res.status(404).json({message:"Interview report not found"})
    }
    const {resume , jobDescription,selfDescription} = intreport
    const pdfBuffer = await generateResumePdf({ resume, jobDescription, selfDescription })

    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`
    })

    res.send(pdfBuffer)

}

export {GenInterviewReport,GetReportById,GetAllReports,generateresumepdf};

