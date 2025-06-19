import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';  // Adjust path if needed
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ isAdmin, setIsAdmin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo-image" />
        <h2 className="logo-text">Web Design Training</h2>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav className={`navbar-right ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
         <Link to="/project-request" className="nav-link">Request Project</Link>
        <Link to="/register" className="nav-link" onClick={() => setMenuOpen(false)}>Register as trainer</Link>
        {isAdmin ? (
          <>
            <Link to="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <button className="nav-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/admin-login" className="nav-link" onClick={() => setMenuOpen(false)}>Admin Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
