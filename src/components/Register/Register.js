import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className = "App">
            <h1>Register</h1>
            <form>
                <input type="email" placeholder = "Your email" />
                <br /><br />
                <input type="password" placeholder = "Your Password" />
                <br /><br />
                <input type="password" placeholder="Re enter your Password" />
                <br /><br />
                <input className = "btn-regular" type="submit" value="Submit"/>
            </form>
            <p>Already have an account <NavLink to="/login">Login</NavLink></p>
            <div>------or-------</div>
            <button onClick={signInWithGoogle} className = "btn-regular">Google Sign in</button>
        </div>
    );
};

export default Register;