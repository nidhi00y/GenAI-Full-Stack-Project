import React from "React"
import Axios from "axios"

const in_api = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials:true
    
});

export async function Send_data({resume,selfDescription,jobDescription}) {
    try{
        const result = await in_api.post("/interview/generate",
            resume,
            selfDescription,
            jobDescription
        )
        return result.data
    }catch(error){
        console.log("error ocuredd while posting",error);
        throw error;
    }
    
}



