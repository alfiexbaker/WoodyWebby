import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
        <h1>Contact Us</h1>
        <div className="contact-container">
           {/* This is the added header */}
            {/* Contact Form */}
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <select>
                        <option value="business">Business Enquiry</option>
                        <option value="stay">Stay with Us</option>
                        <option value="general">General Enquiry</option>
                    </select>
                    <textarea rows="5" placeholder="Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Google Maps & Contact Details */}
            <div className="map-and-details">
                {/* Google Maps Embed */}
                <div style={{ width: '100%' }}>
                    <iframe
                        width="100%"
                        height="300"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Castleton%20Rd,%20Hope,%20Hope%20Valley%20S33%206SB+(The%20Woodroffe%20Arms)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>

                <div className="contact-details">
                    <p><strong>Address:</strong> 1 Castleton Rd, Hope, Hope Valley S33 6SB</p>
                    <p><strong>Phone:</strong> +1234567890</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;
