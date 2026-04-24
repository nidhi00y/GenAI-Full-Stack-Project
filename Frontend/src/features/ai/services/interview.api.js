import React from "React"
import Axios from "axios"

const in_api = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials:true
    
});

export async function Send_data({resume,selfDescription,jobDescription}) {
    try{
        const formdata = new FormData()
        formdata.append("jobDescription",jobDescription)
        formdata.append("selfDescription",selfDescription)
        formdata.append("resume",resume)

        const result = await in_api.post("/interview/generate",
            formdata,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
        )

        return result.data
    }catch(error){
        console.log("error occurred while posting",error);
        throw error;
    }
    
}

export async function get_reportby_id(){
    try{
        const r = await in_api.get(`/reports/${id}`)
        return r.data;
    }catch(error){
        console.log("cant get report by id",error);
        throw error;
    }
}

export async function get_report_all(){
    try{
        const r = await in_api.get('/report')
        return r.data;
    }catch(error){
        console.log("cant get all reports",error);
        throw error;
    }
}

export async function get_reume_pdf(){
    const response = await in_api.post(`/interview/reports/pdf/${id}`,{
        responseType:"blob"
})
    return response.data
}
