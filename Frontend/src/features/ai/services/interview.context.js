import { createContext,useState,useEffect } from "react";
import { getCurrentUser } from "./auth.api";

export const InterviewContext = createContext();

export const InterviewProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState(null);
    const [reports,setReports] = useSate([])

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);


    return (
        <InterviewContext.Provider value={{loading,setLoading,report,setReport,reports,setReports}}>
            {children}
        </InterviewContext.Provider>
    )

}