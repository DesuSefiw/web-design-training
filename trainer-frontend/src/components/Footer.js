// components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaTelegram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Website Design Training. All rights reserved.</p>

        <div className="contact-info">
          <p><FaPhone /> +251 961787618</p>
          <p><FaEnvelope /> desalegnsefiw2@gmail.com</p>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer" aria-label="Telegram"><FaTelegram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
