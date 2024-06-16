import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import the CSS file
import logo from "../assets/logo.jpg"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar-container">
            <div className="logo-container">
            <Link to="/" className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                &#9776;  {/* Unicode character for hamburger menu */}
            </div>
            <div className={`button-container ${menuOpen ? 'open' : ''}`}>
                <Link to="/our-work" className="nav-button">Our Work</Link>
                <Link to="/services" className="nav-button">Services</Link>
                <Link to="/contact" className="nav-button">Contact Us</Link>
            </div>
        </header>
    );
};

export default Header;
