
import React from 'react';
import './About.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



function About(props) {


    return (

        <div data-testid="test-about">
            <nav>
                <h1>Living Atlas {props.isLoggedIn}</h1> <img src="/CEREO-logo.png" alt="CEREO Logo" style={{ width: '140px', height: '50px', float: "left" }}></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {props.isLoggedIn && <li><Link to="/profile">Profile</Link></li>}


                </ul>
            </nav>


            <div className="about">


                <h1>About Us</h1>
                <p>Living Atlas is a web application aimed at solving the problem of scattered and
                    inaccessible environmental data. Our goal is to provide a central location for collecting, sharing,
                    and accessing environmental data, making it available to a wide range of stakeholders including
                    tribal communities, academic institutions, and government agencies.</p>
            </div>

        </div>





    );
}

export default About;
