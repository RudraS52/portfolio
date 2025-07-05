import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 style={{color: "white"}} className="navbar-logo">Rudra's Portfolio</h1>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#certifications">CERTIFICATIONS</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
}

export default Navbar;
