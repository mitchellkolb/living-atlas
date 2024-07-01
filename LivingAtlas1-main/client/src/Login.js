import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import api from './api.js';

function Login({ email, setEmail, password, setPassword, message, setMessage, isLoggedIn, setIsLoggedIn, username, setUsername }) {


    const [submitemail, setsubmitEmail] = useState('');


    // Log the component lifecycle
    useEffect(() => {
        console.log('Login component mounted');
        return () => {
            console.log('Login component will unmount');
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();


        api.get('/profileAccount', {

            params: {
                email: submitemail,
                password: password
            }
        })
            .then(response => {
                const accountData = response.data['Account Information'];
                if (accountData && accountData.length > 0) {
                    const [name, email] = accountData[0];
                    setIsLoggedIn(true);
                    setMessage('Successfully logged in!');
                    setUsername(name); // Use the returned name
                    setEmail(email);   // Update email, although it might be redundant
                } else {
                    setMessage('Invalid email or password.');
                }
            })
            .catch(error => {
                console.error("Error during login:", error);
                setMessage('Error during login. Please try again.');
            });
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setsubmitEmail('');
        setPassword('');
        setMessage('Successfully logged out.');
        setUsername("You're logged out.");

    };

    return (
        <div>
            <nav>
                <h1>Living Atlas</h1> <img src="/CEREO-logo.png" alt="CEREO Logo" style={{ width: '140px', height: '50px', float: "left" }}></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {isLoggedIn && <li><Link to="/profile">Profile</Link></li>}


                </ul>
            </nav>
            <div className="login">
                <h1>Login</h1>
                <h2>Welcome {username} {email}</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={submitemail}
                            onChange={(e) => setsubmitEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <button onClick={handleLogout}>Logout</button>
                {/* {isLoggedIn ? (
                    <p>Welcome! You are logged in.</p>
                ) : (
                    <p>Please log in to access the features.</p>
                )} */}
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Login;
