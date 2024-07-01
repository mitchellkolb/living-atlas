import React, { useState } from 'react';
import './Card.css';
import Modal from 'react-modal';
import axios from 'axios';
import api from './api.js';



function Card(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({});



    const handleLearnMore = () => {
        // alert(`Clicked Learn More for ${props.title}`);
        setIsModalOpen(true);
    };





    const downloadFile = async () => {
        const fileID = props.formData.fileID;
        try {
            const response = await api.get(`/downloadFile`, {
                params: { fileID },
                responseType: 'blob', // Important for handling the binary data
            });

            const contentDisposition = response.headers["content-disposition"];
            let fileName = 'filename' + props.formData.fileEXT; // Corrected access to fileEXT


            if (contentDisposition) {
                const fileNameMatch = contentDisposition.match(/filename="?(.+)"?/);
                if (fileNameMatch.length > 1) {
                    fileName = fileNameMatch[1];
                }
            }

            // Create a URL for the blob
            const fileURL = window.URL.createObjectURL(new Blob([response.data]));
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;

            // Set the file name in the download attribute of the link
            fileLink.setAttribute('download', fileName); // Use dynamic file name
            document.body.appendChild(fileLink);

            // Trigger the download
            fileLink.click();

            // Clean up
            fileLink.parentNode.removeChild(fileLink);
            window.URL.revokeObjectURL(fileURL);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Handle specific error
                alert('File is not in the database');
            } else {
                // Handle other errors
                alert('An error occurred while downloading the file');
            }
        }
    };









    const handleDelete = () => {
        api.delete(`/deleteCard`, {
            params: {
                username: props.formData.username,  // Mitchell, as per your provided constants
                title: props.formData.title  // title from the formData prop
            }
        })
            .then(response => {
                console.log("Card deleted successfully");
                alert("Card deleted successfully");
                // You might want to refresh the card list or remove the card from the UI here
                props.onCardDelete(true); // Trigger the update

            })
            .catch(error => {
                console.error(error);
                alert("Failed to delete the card");
            });

    };




    const determineBackgroundColor = () => {
        const category = props.formData.category;
        if (category) {
            if (category === 'River') {
                return '#99ccff';
            } else if (category === 'Watershed') {
                return '#ccff99';
            } else if (category === 'Places') {  // Changed 'Places' to 'Landscapes' based on your example
                return '#ffff99';
            }
        }
        return '#fff';  // default background color
    };



    const truncateDescription = (description, charLimit) => {
        if (!description) return '';
        return description.length > charLimit ? description.substring(0, charLimit) + '...' : description;
    };








    return (
        <div className="card" style={{ backgroundColor: determineBackgroundColor() }}>
            {/* <img src={props.image} alt={props.title} style={{ width: '200px', height: '200px' }} /> */}
            <h2>{props.formData.title}</h2>
            <p>{truncateDescription(props.formData.description, 100)}</p>


            <button className="card-button" onClick={handleLearnMore}>Learn More</button>
            {/* <button onClick={handleGetInfo}>Get Info</button> */}
            {props.username && (
                <div>
                    <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleDelete}>Delete Card</button>

                </div>
            )}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="Modal">
                <h2 className="card-text">{props.formData.title}</h2>
                <p className="card-text"><b>Name</b>: {props.formData.username}</p>
                <p className="card-text"><b>Email:</b> {props.formData.email}</p>
                <p className="card-text"><b>Funding:</b> {props.formData.funding}</p>
                <p className="card-text"><b>Organization:</b> {props.formData.org}</p>
                <p className="card-text"><b>Title:</b> {props.formData.title}</p>
                <p className="card-text"><b>Link:</b> {props.formData.link}</p>
                <p><b>Description:</b> {props.formData.description}</p>
                <p><b>Category:</b> {props.formData.category}</p>

                <p className="card-text"><b>Tags:</b> {props.formData.tags}</p>
                <p className="card-text"><b>Latitude:</b> {props.formData.latitude}</p>
                <p className="card-text"><b>Longitude:</b> {props.formData.longitude}</p>

                {props.formData.fileID && (

                    <div>
                        <button onClick={downloadFile}>Download {props.formData.fileEXT}</button>
                    </div>
                )}
                {/* <button onClick={handleDownload2}>Download PDF</button> */}

                <button style={{ backgroundColor: 'red', color: 'white', margin: '15px' }} onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}

export default Card;
