import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    &copy; 2024 MyApp. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="/about" className="footer-link">About</a>
                    <a href="/contact" className="footer-link">Contact</a>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
