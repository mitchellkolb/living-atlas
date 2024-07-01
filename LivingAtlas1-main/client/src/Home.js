import Header from './Header';
import Main from './Main';
import React, { useState } from 'react';


function Home(props) {
    const [filterCondition, setFilterCondition] = useState('');
    const [CategoryCondition, setCategoryConditionCondition] = useState('');

    const [searchCondition, setSearchCondition] = useState('');
    const coordinates = {
        NE: {
            Lng: -116.5981,
            Lat: 47.0114
        },
        SW: {
            Lng: -117.7654,
            Lat: 46.4466
        }
    };
    const [boundCondition, setboundCondition] = useState(coordinates);





    return (
        <div>
            <Header
                isLoggedIn={props.isLoggedIn}
                filterCondition={filterCondition}
                setFilterCondition={setFilterCondition}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                CategoryCondition={CategoryCondition}
                setCategoryConditionCondition={setCategoryConditionCondition}
                email={props.email}
                username={props.username}
            />
            <Main
                filterCondition={filterCondition}
                setFilterCondition={setFilterCondition}
                searchCondition={searchCondition}
                setSearchCondition={setSearchCondition}
                boundCondition={boundCondition}
                setboundCondition={setboundCondition}
                CategoryCondition={CategoryCondition}
                setCategoryConditionCondition={setCategoryConditionCondition}
            />
        </div>

    );
}




export default Home;