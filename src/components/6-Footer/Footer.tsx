import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-menu">
          <li className="menu-item"><a href="#about">Om mig</a></li>
          <li className="menu-item"><a href="#main">Tjänster</a></li>
          <li className="menu-item"><a href="/documents/pastorGeorge_CV.pdf" download>CV</a></li>
          <li className="menu-item"><a href="#contact">Kontakt</a></li>
        </ul>

        <div className="social-container">
          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.facebook.com/georgesdb/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.linkedin.com/in/george-youssef-46a511261/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.tiktok.com/@al.enjeel" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright-container">
          <p className="copyright-text">
            &copy; {currentYear} <a href="https://georgedev.se/" target="_blank" className="name-link">George Youssef</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;