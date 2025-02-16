import "../CSS/ContactInfo.css"; // Import the CSS file

const ContactInfo = () => {
    return (
        <div className="contact-container1">
            {/* Contact Details */}
            <div className="contact-details1">
                <h2>Contact Us</h2>
                <p><strong>Mob:</strong> <a href="tel:+919764940312">9764940312</a></p>
                <p><strong>Mail:</strong> <a href="mailto:toshniwalsarvesh@gmail.com">toshniwalsarvesh@gmail.com</a></p>
                <p><strong>Address:</strong> Office No. 5, 1st Floor, Kunal Complex, Behind Hotel Shailaja, Off J M Road, 422/1, Shivaji Nagar, Pune, Maharashtra 411005</p>
            </div>

            {/* Google Map */}
            <div className="map-container1">
                <iframe
                    title="Office Location"
                    className="google-map1"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.443943716661!2d73.8477856747984!3d18.523385969880312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf95f8a0499d%3A0x61594b3b51a66e41!2sKunal%20Complex%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra%20411005!5e0!3m2!1sen!2sin!4v1708072135668!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactInfo;
