import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='landing'>
            <logo src="./logo.svg"></logo>
            <h1>Welldone | My Locations</h1>
            <p>
                This is an app for welldone software test
            </p>
            <Link to="/categories">Categories</Link>
            <Link to="/locations">Locations</Link>
        </div>
    )
};

export default Landing;