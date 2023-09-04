import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={`App-header ${scrollPosition > 0 ? 'scroll' : ''}`}>
        <img src="/logo.png" alt="logo" className="App-logo" />
        <button className={`menu-toggle ${scrollPosition > 0 ? 'scroll' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas fa-chevron-${menuOpen ? 'up' : 'down'}`}></i>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#home">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#menu">Menu</a>
          <a href="#book-a-room">Stay With Us</a>
          <a href="#contact">Contact</a>
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
      <div id="home">
        <h1>Our Pub</h1>
        <div className="woodroffe-section">
          <p className="woodroffe-description">
            Nestled in the heart of the picturesque Peak District National Park in Hope, The Woodroffe Arms stands as a beacon of traditional British hospitality. This iconic establishment has been the talk of the town, consistently praised for its genuine, down-to-earth service complemented by a vast selection of fine ales and beers. Beyond our inviting tavern, guests can indulge in the luxury of our en-suite rooms, each designed with a touch of British charm to ensure acomfortable stay. As a testament to our unwavering commitment to quality, many visitors have lauded our warm and welcoming ambiance, making The Woodroffe Arms an essential destination for both locals and travellers alike. Whether you're seeking a cosy weekend getaway, a memorable dining experience, or just a pint in good company, we invite you to experience the legacy of The Woodroffe Arms.
          </p>
          <img src="/gallery/WoodyOut.png" alt="Woodroffe Exterior" className="woodroffe-image" />
        </div>
        <Gallery />
        <h1>Contact Us</h1>
        <Contact />
      </div>
    </div>
  );
}

export default App;