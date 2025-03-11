import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../../assets/apcilogo.jpg'
import menu from '../../assets/icons8-menu-bar-50.png'
import './Navbar.css'
function Navbar() {

  return (
    <div className='navbar'>
      <div className="nav1">
        <p>Mon-Thu<span> 8:00 am to 9:00pm</span></p>
        <div className='spc'>
          <a href="#">Support |</a>
          <a href="#"> Privacy |</a>
          <a href="#"> Contact</a>
        </div>
      </div>
      <img className='nav2' src={navlogo}/>
      <div className='nav3'>
        <div className='menu1'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Authors</a>
        <a href='#'>Committee</a>
        <a href='#'>Speakers</a>
        <a href='#'>Event/Details</a>
        <a href='#'>Registration</a>
        <a href='#'>Venue/Travel</a>
        <a href='#'>Contact Us</a>
        </div>
        {/* <img src={menu} className='menu2' /> */}
      </div>
    </div>
  )
}

export default Navbar
