import React from "react";
// Assuming you have a CSS file for styling the Navbar
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="nav-name">
        <a href="/">Preksha Garg</a>
      </h2>

      <div className="nav-links">
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#skills" className="nav-item">
          Skills
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </div>
    </nav>
  );
}
