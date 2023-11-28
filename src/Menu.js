import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Menu.css';
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Fetch the menu data when the component mounts
        fetch('/menu.json')
            .then(response => response.json())
            .then(data => {
                setMenuItems(data);
            })
            .catch(error => {
                console.error("Error fetching the menu JSON:", error);
            });
    }, []);

    const toggleAccordion = (index) => {
        setMenuItems(menuItems.map((item, i) => {
            if (i === index) {
                return { ...item, open: !item.open };
            }
            return item;
        }));
    };

    return (
        <>
            <div className="menu-section">
                <h1>Menu</h1>
                {menuItems.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <button
                            className="accordion-button"
                            type="button"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.name}
                        </button>
                        {item.open && (
                            <div className="accordion-content">
                                <Document
                                    file={item.path}
                                    onLoadError={console.error}
                                    className="pdf-document"
                                >
                                    <Page pageNumber={1} width={400} />
                                </Document>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="book-table-section">
                <a href="tel:+441433623093" className="book-table-button">
                    <button>Book a Table</button>
                </a>
            </div>
        </>
    );
};

export default Menu;
