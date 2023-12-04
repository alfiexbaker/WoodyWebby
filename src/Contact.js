import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        // Build template parameters from the form data
        const templateParams = {
            from_name: e.target.from_name.value,
            from_email: e.target.from_email.value,
            enquiry_type: e.target.enquiry_type.value,
            message: e.target.message.value,
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                // Optionally, clear the form or show a success message here
            }, (error) => {
                console.log('Failed to send email:', error.text);
                // Optionally, show an error message here
            });
    };

    return (
        <div id="contact-section">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Name" required />
                        <input type="email" name="from_email" placeholder="Email" required />
                        <select name="enquiry_type">
                            <option value="business">Business Enquiry</option>
                            <option value="stay">Stay with Us</option>
                            <option value="general">General Enquiry</option>
                        </select>
                        <textarea name="message" rows="5" placeholder="Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
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
                        <p><strong>Address:</strong> 1 Castleton Rd, Hope, Hope Valley S33 6SB <br /><strong>Phone:</strong> 01433 623093</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
