import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Rudra's Portfolio</h1>
    <ul className="nav-links">
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href="#blog">BLOGS</a></li>
      <li><a href="#contact">CONTACT</a></li>
      <li><a href="#portfolio">PORTFOLIO</a></li>
    </ul>
  </nav>
);

export default Navbar;
