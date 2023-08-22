import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Show the beer.gif loader before rendering the app

const loader = document.querySelector('#root');
const root = ReactDOM.createRoot(loader);const showLoadingAnimation = () => {
    loader.innerHTML = '<img src="/beer.gif" alt="loading..." class="loading-gif"/>';
    setTimeout(() => {
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            loader
        );
    }, 1500); // Display the loading GIF for 1.5 seconds
};

showLoadingAnimation();
