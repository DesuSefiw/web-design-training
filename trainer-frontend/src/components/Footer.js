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
          <p>
            <FaPhone />{' '}
            <a href="tel:+251961787618" className="footer-link">
              +251 961787618
            </a>
          </p>
          <p>
            <FaEnvelope />{' '}
            <a href="mailto:desalegnsefiw2@gmail.com" className="footer-link">
              desalegnsefiw2@gmail.com
            </a>
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com/groups/163333185878581/permalink/720465120165382/?mibextid=NnVzG8"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://t.me/webtrainers" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
