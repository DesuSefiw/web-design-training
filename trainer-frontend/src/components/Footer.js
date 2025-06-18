// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Website Design Training. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">🐦</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">🔗</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
