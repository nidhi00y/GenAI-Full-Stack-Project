import React from 'react'
import { useNavigate } from 'react-router';
import './login.form.scss'

const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="form-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
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