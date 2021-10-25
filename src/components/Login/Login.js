import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setError, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirectURL);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
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
            <button className= "btn-regular" onClick = {handleGoogleLogin}>Google Sign in</button>
        </div>
    );
};

export default Login;