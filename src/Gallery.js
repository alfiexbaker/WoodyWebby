import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [imageNames, setImageNames] = useState([]);

    useEffect(() => {
        fetch('/gallery.json')
            .then(response => response.json())
            .then(data => {
                setImageNames(data);
            })
            .catch(error => {
                console.error("Error fetching the gallery JSON:", error);
            });
    }, []);

    return (
        <main className="page-content">
            {imageNames.map((imageName, index) => (
                <div
                    key={index}
                    className="card"
                    style={{ backgroundImage: `url(/gallery/${imageName})` }}
                >
                </div>
            ))}
        </main>
    );
}

export default Gallery;
