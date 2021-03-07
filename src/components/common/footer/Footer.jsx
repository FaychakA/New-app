import React from 'react';
import './Footer.scss'

const Footer = () => {

    return (
        <footer className="footer">
            <a
                href="https://github.com/FaychakA/New-app"
                className="footer__link"
            >
                github
            </a>

            <div className="footer__text">
                ©2021
            </div>
        </footer>
    )
};

export default Footer;