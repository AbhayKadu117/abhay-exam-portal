import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'

const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/src/assets/images/logo.png" alt="SSC Maharashtra Board" height="40" />
          <span>SSC Maharashtra Board</span>
        </Link>
        
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/standards" className={`nav-link ${location.pathname === '/standards' ? 'active' : ''}`}>
            Standards
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
          {isLoggedIn ? (
            <Link to="/standards" className="nav-link btn btn-secondary btn-sm">
              Start Exam
            </Link>
          ) : (
            <Link to="/login" className="nav-link btn btn-secondary btn-sm">
              Student Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar