import React, { useState, useEffect } from 'react';
import './App.css';  // Importing the styles

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(response => response.json())
            .then(data => {
                setMenuItems(data);
            })
            .catch(error => {
                console.error("Error fetching the menu JSON:", error);
            });
    }, []);

    return (
        <div className="menu-section">
            <h1>Menu</h1>
            <table className="menu-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td className="menu-item-price">{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Menu;
