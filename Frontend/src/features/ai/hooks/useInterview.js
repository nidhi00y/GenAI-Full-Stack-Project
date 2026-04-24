import { useContext,useEffect } from "react";
import { InterviewContext } from "../services/interview.context";
import {Send_data,get_reportby_id,get_report_all,get_resume_pdf} from "../services/interview.api.js"

export const useInterview = () => {

    const context = useContext(InterviewContext)
    const { id } = useParams()

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const { loading, setLoading, report, setReport, reports, setReports } = context

    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        setLoading(true)
        let response = null
        try {
            response = await Send_data({ jobDescription, selfDescription, resumeFile })
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        return response.interviewReport
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        let response = null
        try {
            response = await get_reportby_id(interviewId)
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        return response.interviewReport
    }

    const getReports = async () => {
        setLoading(true)
        let response = null
        try {
            response = await get_report_all()
            setReports(response.interviewReports)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        return response.interviewReports
    }

    const gen_resume_pdf = async() => {
        setLoading(true)
        let response = null
        try {
            response = await get_resume_pdf({ interviewReportId })
            const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewReportId}.pdf`)
            document.body.appendChild(link)
            link.click()
        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(()=>{
        if(id){
            getReportById(id)
        }else{
            getReports()
        }
    },[id])


    return { loading, report, reports, generateReport, getReportById, getReports,gen_resume_pdf }

}