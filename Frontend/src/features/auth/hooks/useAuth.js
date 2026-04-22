import {useContext} from 'react'
import { AuthContext } from '../services/auth.context.jsx'
import {login,register,logout,getCurrentUser} from '../services/auth.api.js'

export function useAuth(){
    const context = useContext(AuthContext);
    const {user, setUser, loading, setLoading} = context;

    const handleLogin = async ({email,password}) =>{
        setLoading(true);
        try{
            const response = await login({email,password});
            setUser(response.user);
        }catch(error){
            console.error('Login error:', error);
        }finally{
            setLoading(false);
        }
        
    }

    const handleRegister = async ({name,email,password}) =>{
        setLoading(true);
        try{
            const response = await register({name,email,password});
            setUser(response.user);
        }catch(error){
            console.error('Registration error:', error.message);
            throw error;
        }finally{
            setLoading(false);
        }
    }

    const handleLogout = async () =>{
        setLoading(true);
        try{
            await logout();
            setUser(null);
        }catch(error){
            console.error('Logout error:', error);
        }finally{
            setLoading(false);
        }
        
    }

    return {user,loading,handleLogin,handleRegister,handleLogout}

}