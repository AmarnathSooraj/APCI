import React from 'react';
import ktu from '../../assets/ktu.png';
import vda from '../../assets/vda.jpeg';
import menu from '../../assets/icons8-menu-bar-50.png';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav1">
        <p>Mon-Thu<span> 8:00 am to 9:00 pm</span></p>
        <div className="spc">
          <a href="#">Support |</a>
          <a href="#"> Privacy |</a>
          <a href="#"> Contact</a>
        </div>
      </div>
      <div className="nav2">
        <img src={vda} alt="College Logo 1" />
        <h1>InRacs2025</h1>
        <img src={ktu} alt="College Logo 3" />
      </div>
      <nav className="nav3">
        <div className="menu1">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/committee">Committee</a>
          <a href="/speakers">Speakers</a>
          <a href="/event-details">Event/Details</a>
          <a href="/registration">Registration</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;