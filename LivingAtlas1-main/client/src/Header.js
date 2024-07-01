import React, { Component } from 'react';
import './Header.css';
import UploadButton from './UploadButton.js';
import ModalButton from './ModalButton.js';
import FormModal from './FormModal.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';

function Header(props) {
    // beginning of custom filter popup
    const [isAddFilterOpen, setAddFilterOpen] = useState(false);
    const [filterInputText, setFilterInputText] = useState('');

    const openFilterPopup = () => {
        setAddFilterOpen(true);
    };

    const closeFilterPopup = () => {
        setAddFilterOpen(false);
    };

    const handleCustomFilterChange = (event) => {
        setFilterInputText(event.target.value);
    };
    // end of custom filter popup

    const [activeFilters, setActiveFilters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const handleFilterChange = (event) => {
        const filterValue = event.target.value;
        if (filterValue === '') {
            setActiveFilters([]);
            props.setFilterCondition('');
            props.setCategoryConditionCondition('');
            console.log('All filters removed');
        }
        else if (filterValue === "River" || filterValue === "Watershed" || filterValue === "Places") {
            props.setCategoryConditionCondition(filterValue);
        }
        else if (filterValue && !activeFilters.includes(filterValue)) {
            const newFilters = [...activeFilters, filterValue];
            setActiveFilters(newFilters);
            props.setFilterCondition(newFilters.join(','));
            console.log(`${filterValue} applied`);
        }
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const removeFilter = (filter) => {
        if (filter === "River" || filter === "Watershed" || filter === "Places") {
            props.setCategoryConditionCondition('');

        } else {
            const newFilters = activeFilters.filter(f => f !== filter);
            setActiveFilters(newFilters);
            props.setFilterCondition(newFilters.join(','));

        }


    };

    const removeAllFilter = () => {
        setActiveFilters([]);
        props.setFilterCondition(''); // or whatever is considered "no filter"
        console.log('All filters removed');
    };

    const addCustomFilter = () => {
        //const filterValue = prompt("Enter your custom filter value");
        const filterValue = filterInputText;

        if (filterValue && !activeFilters.includes(filterValue)) {
            const newFilters = [...activeFilters, filterValue];
            setActiveFilters(newFilters);
            props.setFilterCondition(newFilters.join(','));
            console.log(`${filterValue} applied`);
        }
        closeFilterPopup();
    };

    const executeSearch = () => {
        //removeAllFilter();
        props.setSearchCondition(searchTerm);
        console.log(`${searchTerm} applied`);

    };


    return (
        <header>
            <nav>
                <h1>RWC</h1> <img src="/CEREO-logo.png" alt="CEREO Logo" style={{ width: '140px', height: '50px', float: "left" }}></img>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {props.isLoggedIn && <li><Link to="/profile">Profile</Link></li>}



                </ul>
            </nav>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <button onClick={executeSearch}>Search</button>

                {/* <div className="nav-buttons"> */}

                <select onChange={handleFilterChange} className='custom-category'>
                    <option value="">Select a Category...</option>
                    <option value="River">River</option>
                    <option value="Watershed">Watershed</option>
                    {/* change Communities to Places in future */}
                    <option value="Places">Places</option>

                    {/* <option value="Communities">Communities</option>
                    <option value="Landscapes">Landscapes</option>
                    <option value="Organisms">Organisms</option>
                    <option value="Stories">Stories</option>
                    <option value="Watershed">Watershed</option>
                    <option value="People">People</option> */}
                    {/* Add more filters as needed */}
                </select>

                {/* <button onClick={addCustomFilter} className='custom-filter'>Add Custom filters</button> */}
                {/* New Custom Filter popup */}
                <button onClick={openFilterPopup}>Add Custom Filters</button>

                {/* Modal for Add Customer Filter */}
                <Modal
                    isOpen={isAddFilterOpen}
                    onRequestClose={closeFilterPopup}
                    className="form-modal">
                    {isAddFilterOpen && (
                        <div>
                            <input
                                type="text"
                                onChange={handleCustomFilterChange}
                                placeholder="Enter a custom filter..."
                            />
                            <button onClick={closeFilterPopup} style={{ background: 'red', padding: '10px' }}>Close</button>
                            <button onClick={addCustomFilter} style={{ background: 'green' }}>Add Filter</button>
                        </div>
                    )}
                </Modal>

                {/* {isAddFilterOpen && (
                    <div className="modal" style={{ paddingLeft: '10px', zIndex: 1, }} >
                        <div className="overlay"></div>
                        <div className="modal-content">
                            <input
                                type="text"
                                onChange={handleCustomFilterChange}
                                placeholder="Enter a custom filter..."
                            />
                            <button onClick={closeFilterPopup} style={{ background: 'red', color: 'white', padding: '10px' }}>Close</button>
                            <button onClick={addCustomFilter}>Add Filter</button>
                        </div>
                    </div>
                )} */}



                {
                    props.isLoggedIn && <FormModal className="form-modal-button" email={props.email} username={props.username} />

                }

                {/* </div> */}

            </div>
            <div>
                {activeFilters.map(filter => (
                    <span key={filter} className="filter-tag">
                        {filter}
                        <button onClick={() => removeFilter(filter)}>x</button>
                    </span>
                ))}
            </div>



        </header>
    );
}


export default Header;
