import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing
import ktu from '../../assets/ktu.png';
import vda from '../../assets/vda.jpeg';
import menu from '../../assets/icons8-menu-bar-50.png'; // Remove if unused
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      {/* Top Bar */}
      <div className="nav1">
        <p>Mon-Thu<span> 8:00 am to 9:00 pm</span></p>
        <div className="spc">
          <a href="#">Support |</a>
          <a href="#"> Privacy |</a>
          <a href="#"> Contact</a>
        </div>
      </div>

      {/* Main Title Section */}
      <div className="nav2">
        <img src={vda} alt="College Logo 1" />
        <div className="title">
          InRACS 2025
          <span>International Conference on Recent Advancements in Computing Technology and System Design</span>
        </div>
        <img src={ktu} alt="College Logo 3" />
      </div>

      {/* Navigation Menu */}
      <nav className="nav3">
        <div className="menu1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/committee">Committee</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/event-details">Event/Details</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
