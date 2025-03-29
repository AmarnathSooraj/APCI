import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for routing
import ktu from '../../assets/ktu.png';
import vda from '../../assets/vda.jpeg';
import inracs from '../../assets/inracs.jpg'
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
        <img src={vda} alt="Cev" />
        <img src={inracs} alt="inracs" />
        <img src={ktu} alt="ktu" />
      </div>

      {/* Navigation Menu */}
      <nav className="nav3">
        <div className="menu1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/committee">Committee</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/events">Event/Details</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/conferenceTracks">Call For Papers</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
