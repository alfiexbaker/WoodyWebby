import React from 'react';
import Gallery from './Gallery';
import Contact from './Contact';  // Step 1: Import the Contact component
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="/logo.png" alt="logo" className="App-logo" />
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about-us">About Us</a>
                    <a href="#menu">Menu</a>
                    <a href="#book-a-room">Stay With Us</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <div id="home">
                <h1>Our Pub</h1>
                <div className="woodroffe-section">
                    <p className="woodroffe-description">
                        Nestled in the heart of the picturesque Peak District National Park in Hope, The Woodroffe Arms stands as a beacon of traditional British hospitality. This iconic establishment has been the talk of the town, consistently praised for its genuine, down-to-earth service complemented by a vast selection of fine ales and beers. Beyond our inviting tavern, guests can indulge in the luxury of our en-suite rooms, each designed with a touch of British charm to ensure a comfortable stay. As a testament to our unwavering commitment to quality, many visitors have lauded our warm and welcoming ambiance, making The Woodroffe Arms an essential destination for both locals and travellers alike. Whether you're seeking a cosy weekend getaway, a memorable dining experience, or just a pint in good company, we invite you to experience the legacy of The Woodroffe Arms.
                    </p>
                    <img src="/gallery/WoodyOut.png" alt="Woodroffe Exterior" className="woodroffe-image" />
                </div>
                <Gallery />
                <Contact />
            </div>
        </div>
    );
}

export default App;
