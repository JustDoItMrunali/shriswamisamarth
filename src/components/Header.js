// src/components/Header.js (Complete Final Version)
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; 

// IMPORTANT: Accept openContactModal prop
const Header = ({ theme, toggleTheme, user, openContactModal }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  // Removed isContactOpen state as the contact link now directly triggers a modal

  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  
  const ThemeIcon = theme === 'light' ? '🌙' : '☀️';
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); 

  // Function to close menu after clicking a link (good UX)
  const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
      setIsAboutOpen(false);
  };
  
  // Custom click handler for the contact link (triggers modal)
  const handleContactClick = (e) => {
      e.preventDefault();
      openContactModal(); // Triggers modal in App.js
      closeMobileMenu();
  };


  return (
    <header className="header-container">
      {/* 1. Logo with YOUR specified styling */}
   <Link 
        to="/" 
        className="logo logomain" 
        style={{ 
          textDecoration: 'underline', 
          fontSize: '30px',
          fontWeight: 'bold', 
          fontStyle: 'normal', 
          color: '#a0165bff', // Your dark pink color
          transition: 'transform 0.3s',
          textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' // Your white shadow
        }}
        onClick={closeMobileMenu}
      >
        Shree Swami Samarth
      </Link>

      {/* 2. Hamburger Icon (Visible on Mobile Only) */}
      <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle navigation">
          &#9776; 
      </button>
      
      {/* 3. Navigation Links Container (Desktop & Mobile Menu) */}
      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>

        {/* ABOUT US Link (Now links to the /about page) */}
        <div className="dropdown-container" onMouseEnter={toggleAbout} onMouseLeave={toggleAbout}>
          <Link to="/about" className="nav-link-dropdown" onClick={closeMobileMenu}>About Us</Link>
        </div>

        {/* CONTACT US (Triggers Modal Pop-up) */}
        <div className="dropdown-container" onClick={handleContactClick}>
          <a href="#contact-us" className="nav-link-dropdown">Contact us</a>
        </div>
        
        {/* Category Links */}
        <Link to="/gallery" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>Gallery</Link>
        <Link to="/flower-decorations" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>Flower Decorations</Link>
        <Link to="/balloon-decorations" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>Balloon Decorations</Link>
        
        {/* Admin/Logout Links */}
        {user ? (
            <>
                <Link to="/admin" style={{ textDecoration: 'none', fontWeight: 'bold' }} onClick={closeMobileMenu}>Admin</Link>
                <button className="theme-toggle" onClick={() => { handleLogout(); closeMobileMenu(); }} style={{fontSize: '1em', marginLeft: '10px'}}>Logout</button>
            </>
        ) : (
            <Link to="/admin/login" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>Admin Login</Link>
        )}

        {/* 4. Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme} style={{marginLeft: '0'}}>
          {ThemeIcon}
        </button>
      </div>
    </header>
  );
};

export default Header;