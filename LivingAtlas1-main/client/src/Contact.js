import React from 'react';
import './Contact.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="profile">
            <nav>
                <h1>Living Atlas</h1> <img src="/CEREO-logo.png" alt="CEREO Logo" style={{ width: '140px', height: '50px', float: "left" }}></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {props.isLoggedIn && <li><Link to="/profile">Profile</Link></li>}


                </ul>
            </nav>

            <div className="contact">
                <h1>Contact Us</h1>
                <h2>Address</h2>
                <p>CEREO</p>
                <p>PACCAR Room 242</p>
                <p>Washington State</p>
                <p>University</p>
                <p>Pullman, WA 99164-5825</p>
                <h2>Phone and email</h2>
                <p>Phone:  509-335-5531</p>
                <p>Email:  cereo@wsu.edu</p>




            </div>
        </div>
    );
}

export default Contact;