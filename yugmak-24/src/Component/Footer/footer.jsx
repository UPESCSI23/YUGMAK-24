import React from 'react';
const Footer = () => {
  return (
    <div className="section_footer">
      <div className="footer_left_side">
        <div className="footer_text">
          © 2024 UPES-CSI. All rights reserved.
        </div>
        <a className="footer_link hide" href="#">
          Terms &amp; Conditions
        </a>
        <a className="footer_link hide" href="#">
          Privacy Policy
        </a>
        <a className="footer_link" href="/privacy-policy">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
