// src/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ menuOpen, setMenuOpen, scrollPosition }) => {
  return (
    <header className={`App-header ${scrollPosition > 50 ? 'hide' : ''}`}>
      <img src="/logo.png" alt="logo" className="App-logo" />
      <button className={`menu-toggle ${scrollPosition > 0 ? 'scroll' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`fas fa-chevron-${menuOpen ? 'up' : 'down'}`}></i>
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="home" smooth={true}>Home</Link>
        <Link to="menu-section" smooth={true}>Menu</Link>
        <Link to="contact-section" smooth={true}>Contact</Link>
        <a href ="https://www.booking.com/Share-GZMprd"> Stay With Us</a>
      </nav>
      <div className="social-icons">
        <a href="https://www.facebook.com/yourpage">
          <i className="fab fa-facebook"></i>
    </a>
        <a href="https://www.tripadvisor.com/yourpage">
          <i className="fab fa-tripadvisor"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;