import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="profile-picture">
        <img src="../../../public/images/g_avatar.png" alt="Profile" />
      </div>
      <h2 className="name">George Youssef</h2>
      <h3 className="title">Pastor i Equmeniakyrkan</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/georgesdb/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/in/george-youssef-46a511261/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.tiktok.com/@al.enjeel" target="_blank">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
