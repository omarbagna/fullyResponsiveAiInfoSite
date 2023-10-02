import React from 'react';
import logo from '../../assets/Head2.png'
import './footer.css';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" id="footer">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <a href="#footer">Request Early Access</a>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={ logo } alt="logo" />
                    <p>Accra Ghana, </p>
                    <p>Practicing my React Skills</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p><a href="https://www.linkedin.com/in/bagna-farouk-omar-947752104/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                    <p>Counters</p>
                    <p><a href="https://codepen.io/bagna" target="_blank" rel="noreferrer">CodePen</a></p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Accra, Ghana</p>
                    <p>095-1234567</p>
                    <p>info@company.net</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p><a href="https://github.com/omarbagna" target="_blank" rel="noreferrer">Built by BAGNA</a></p>
            </div>
        </div>
    )
}

export default Footer