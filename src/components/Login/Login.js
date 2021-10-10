import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className = "App">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Your email" />
                <br /><br />
                <input type="password" placeholder="Your Password" />
                <br /><br />
                <input className = "btn-regular" type="submit" />
            </form>
            <p>New to ema-john? <NavLink to="/register">Register</NavLink></p>
            <div>------or--------</div>
            <button className= "btn-regular" onClick = {signInWithGoogle}>Google Signin</button>
        </div>
    );
};

export default Login;