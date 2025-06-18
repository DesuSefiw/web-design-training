import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';  // adjust path if needed

function Navbar({ isAdmin, setIsAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Web Design Training Logo" className="logo-image" />
        <h2 className="logo-text">Web Design Training</h2>
      </div>
      <nav className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/register" className="nav-link">Register</Link>
        {isAdmin ? (
          <>
            <Link to="/admin" className="nav-link">Dashboard</Link>
            <button className="nav-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/admin-login" className="nav-link">Admin Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
