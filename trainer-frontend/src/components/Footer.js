// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Website Design Training. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
