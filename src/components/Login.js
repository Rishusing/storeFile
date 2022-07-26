import React, { useState } from 'react'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom"
import './Login.css'

const Login = () => {

    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const login = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    };

    return (

        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className='loginForm'>
                <h3 id='loginhead'>Login Here</h3>

                <label className='lbl' >Email</label>
                <input
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                    className='loginInp' type="text" placeholder="Email" />

                <label className='lbl' >Password</label>
                <input
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                    className='loginInp' type="password" placeholder="Password"  />

                <button className='loginBTN' onClick={login}>SignIn</button>

                <NavLink to='/register' id='createAcc'>Create account?</NavLink>
            </div>
        </>
    )
}

export default Login