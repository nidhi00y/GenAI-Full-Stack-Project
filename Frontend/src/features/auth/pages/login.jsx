import React from 'react'
import './login.form.scss'
import { useNavigate } from 'react-router';


const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="form-container">
                <h1>login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button className='button primary-button' type="submit">Login</button>
                </form>
                <p>Don't have an account? <span className='link' onClick={() => navigate('/register')}>Sign up here</span></p>
            </div>
        </main>
    )
}

export default Login