import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () =>
    <footer className="footer">
        <Link to="/categories">Categories</Link>
        <Link to="/locations">Locations</Link>
    </footer>

export default Footer;
