import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false); // close menu on link click
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</li>
        <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</li>
        <li className={activeSection === 'education' ? 'active' : ''} onClick={() => handleNavClick('education')}>Education</li>
        <li className={activeSection === 'certification' ? 'active' : ''} onClick={() => handleNavClick('certification')}>Certification</li>
        <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>Skills</li>
        <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</li>
        <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
