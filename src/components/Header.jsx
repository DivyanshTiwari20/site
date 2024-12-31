import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="custom-header">
      <div className="header-container">
        <Link to="/" className="header-brand">Divyansh.</Link>
        <nav className="header-nav">
          <Link 
            to="/about" 
            className={`header-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          {' | '}
          <Link 
            to="/blog" 
            className={`header-link ${location.pathname === '/blog' ? 'active' : ''}`}
          >
            Blog
          </Link>
          {/* {' | '}
          <Link 
            to="/contact" 
            className={`header-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;