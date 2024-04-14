import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="section_footer">
      <div className="footer_left_side">
        <div className="footer_text">
          © 2024 UPES-CSI. All rights reserved.
        </div>
      </div>
      <div className="footer_right_side">
        <a
          className="social_fa first"
          href="https://www.instagram.com/upescsi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <a
          className="social_fa"
          href="https://twitter.com/upescsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <a
          className="social_fa"
          href="https://www.youtube.com/@UPESCSIOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          className="social_fa"
          href="https://www.linkedin.com/company/computer-society-of-india-upes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="social_fa"
          href="https://m.facebook.com/upescsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
