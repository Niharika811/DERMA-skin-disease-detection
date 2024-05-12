import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/SignIn.css';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/Main", { state: { email, userId: user.uid } }); // Pass userId here
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };
    

    return (
        <main className="signin-body">
            <section className="signin-container">
                <div>
                    <p className='title'>LOGIN FORM</p>
                    <form>
                        <div className="input-box">
                            <i><FontAwesomeIcon icon={faUser} /></i>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <i><FontAwesomeIcon icon={faLock} /></i>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-box button">
                            <button onClick={onLogin}>Login</button>
                        </div>
                    </form>
                    <p className="para2">
                        No account yet? {' '}
                        <NavLink to="/Signup">
                            Sign up
                        </NavLink>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default SignIn;