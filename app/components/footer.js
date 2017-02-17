import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__border">
                    <div className="footer__logo-container">
                        <img className="footer__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png" />
                    </div>
                </div>
                <ul className="social-links">
                    <li className="social-links__text">
                        <a href="https://twitter.com/hackerearth" target="_blank">Twitter</a>
                    </li>
                    <li className="social-links__text">
                        <a href="https://www.linkedin.com/company/hackerearth" target="_blank">Linkedin</a>
                    </li>
                    <li className="social-links__text">
                        <a href="https://www.facebook.com/HackerEarth" target="_blank">Facebook</a>
                    </li>
                    <li className="social-links__text">
                        <a href="https://plus.google.com/+Hackerearth" target="_blank">Google Plus</a>
                    </li>
                </ul>
                <div className="footer__contact">
                    <p>contact@hackerearth.com</p>
                    <p>+91-80-4155-4695</p>
                    <p>+1-650-461-4192</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
