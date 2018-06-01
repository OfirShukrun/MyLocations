import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';

const Locations = () => {
    return (
        <div className="locations">
            <h1>Locations</h1>
            <p>Name : </p>
            <input />
            <p>Address : <input type="text" /></p>
            <p>Cordinates : <input type="text" /></p>
            <p>Category : <select>
            </select></p>
            <Link to="/">Go back to home page</Link>
            <Toolbar />
        </div>
    )
};

export default Locations;