import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';

const Gallery = () => {
    const [imageNames, setImageNames] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    useEffect(() => {
        fetch('/gallery.json')
            .then(response => response.json())
            .then(data => {
                setImageNames(data);
            })
            .catch(error => {
                console.error("Error fetching the gallery JSON:", error);
            });

        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth <= 768);
        });
    }, []);

    return (
        <div className="gallery-container">
            {isMobile ? (
                <div className="gallery-slider">
                    <Slider {...settings}>
                        {imageNames.map((imageName, index) => (
                            <div key={index}>
                                <img className="gallery-slide" src={`/gallery/${imageName}`} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className="page-content">
                    {imageNames.map((imageName, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{ backgroundImage: `url(/gallery/${imageName})` }}
                        >
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Gallery;