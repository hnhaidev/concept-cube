import React from 'react';
import { Link } from 'react-router-dom';
import UrlLogo from '../assets/images/logo-icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={UrlLogo} alt="loocreative logo" />
      </Link>
      <a href="https://vimeo.com/loocreative" target=" _blank">
        <p>VIMEO</p>
      </a>
      <a href="https://www.instagram.com/loocreative" target=" _blank">
        <p>YOUTUBE</p>
      </a>
      <a href="https://www.instagram.com/loocreative" target=" _blank">
        <p>INSTAGRAM</p>
      </a>
      <a href="https://www.facebook.com/loocreativeinc-110670107091286/" target=" _blank">
        <p>FACEBOOK</p>
      </a>
    </div>
  );
};

export default Footer;
