import React, { useState, useEffect } from 'react';
import Header from './Header';
import OurPub from './OurPub';
import Gallery from './Gallery';
import Menu from './Menu';
import Contact from './Contact';
import './App.css';
import emailjs from 'emailjs-com';
import StayWithUs from './StayWithUs';
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);



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
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollPosition={scrollPosition} />
      <OurPub />
      <Gallery source="/gallery.json" />
      <Menu />
      <Gallery source="/food.json" />
        <StayWithUs />
        <Gallery source={"hotel.json"}/>
        <Contact />
    </div>

  );

}

export default App;