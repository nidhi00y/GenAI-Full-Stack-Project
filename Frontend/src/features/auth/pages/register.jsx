import {React,UseState} from 'react'
import { useNavigate } from 'react-router';
import './login.form.scss'
import { useAuth } from '../services/auth.context.jsx';

const Register = () => {

    const { loading, handleRegister } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        await handleRegister({name,email,password});
        navigate('/');
    }

    if(loading){
        return <div><h1>Loading....</h1></div>
    }

    return (
        <main>
            <div className="form-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}}  type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button className='button primary-button' type="submit">Sign In</button>

                </form>
                <p>Already have an account? <span className='link' onClick={() => navigate('/login')}>Login here</span></p>

            </div>
        </main>
    )
}


export default Register