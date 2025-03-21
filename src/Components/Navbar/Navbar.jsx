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
        <div className='title'>InRACS 2025
          <span>International Conference on Recent Advancements in Computing Technology and System Design</span>
        </div>
        <img src={ktu} alt="College Logo 3" />
      </div>
      <nav className="nav3">
        <div className="menu1">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Committee</a>
          <a href="/">Speakers</a>
          <a href="/">Event/Details</a>
          <a href="/">Registration</a>
          <a href="/">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;