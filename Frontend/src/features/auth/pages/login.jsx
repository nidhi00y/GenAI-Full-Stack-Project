import {React,useSate} from 'react'
import './login.form.scss'
import { useNavigate } from 'react-router';
import { useAuth } from '../services/auth.context.jsx';


const Login = () => {

    const {loading,handleLogin} = useAuth();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({email,password});
    }

    if(loading){
        return <div><h1>Loading....</h1></div>
    }

    return (
        <main>
            <div className="form-container">
                <h1>login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password" required />
                    </div>
                    <button className='button primary-button' type="submit">Login</button>
                </form>
                <p>Don't have an account? <span className='link' onClick={() => navigate('/register')}>Sign up here</span></p>
            </div>
        </main>
    )
}

export default Login