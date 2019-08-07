import React from 'react'
import logo  from '../../logo.svg'
import './navbar.scss'
function Navbar() {
    return (
        <nav className="navbar">
           <img src={logo} alt="City Tours Company" />
           <ul className="nav-links">
               <li><a href="/" className="nav-item">Home</a></li>
               <li><a href="/" className="nav-item active">Tours</a></li>
               <li><a href="/" className="nav-item">About</a></li>
           </ul>
        </nav>
    )
}

export default Navbar
