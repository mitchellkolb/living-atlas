import React from 'react';
import './Content2.css';
import Card from './Card.js';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Profile.css';
import api from './api.js';
import Register from './Register'; // Import the Register component


function Profile(props) {



    const [cards, setCards] = useState([]);
    const [filterCondition, setFilterCondition] = useState(props.filterCondition);
    const isInitialMount = useRef(true);
    const [userEmail, setUserEmail] = useState("mitchell.kolb@wsu.edu");
    const [username, setUsername] = useState("Mitchell");
    const [showRegister, setShowRegister] = useState(false);
    const [lastDeletedCard, setLastDeletedCard] = useState(false);


    // Function to toggle the register form visibility
    function handleOpenRegister() {
        setShowRegister(true);
    }

    function handleCloseRegister() {
        setShowRegister(false);
    }







    useEffect(() => {
        // Check if the username prop is available
        if (props.username) {
            api.get(`/profileCards?username=${props.username}`)
                .then(response => {
                    console.error(response.data.data);
                    setCards(response.data.data);
                    setLastDeletedCard(false);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [props.username, lastDeletedCard]); // Add props.username as a dependency










    return (


        <div>
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


            <div className="about">


                <h1>Profile page</h1>
                <h2>User Name: {props.username}</h2>
                <h2>email: {props.email}</h2>


                <p>On the profile page, you're granted a comprehensive view of every piece of data you've shared with our community.
                    If you ever notice any inaccuracies or wish to make updates, the edit feature is at your service.
                    And for those moments when you decide some information is best kept private or removed,
                    the delete option is there to ensure your content remains exactly how you want it..</p>
                <button onClick={handleOpenRegister}>Invite New User</button>

                {showRegister && <Register closeRegister={handleCloseRegister} />}

            </div>
            <section id="content-2">
                {/* <h1>Content Area 2</h1>
            <p>
                Here, you can see the results of your search displayed in a grid format. Each card represents a unique data point. You can sort the results by clicking on the filter or using the search.
            </p> */}

                <div className="card-container">

                    {cards.map(card => (
                        <Card formData={card} email={props.userEmail} username={props.username} onCardDelete={setLastDeletedCard}
                        />
                    ))}
                </div>

                {/* <div>
                <h3>JSON Response:</h3>
                <pre>{JSON.stringify(cards, null, 2)}</pre>
            </div> */}
            </section>

        </div>

    );
}

export default Profile;
