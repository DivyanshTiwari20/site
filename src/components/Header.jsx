import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * - Provides navigation for the website
 * - Sticks to top of the page
 * - Shows active page state
 * - Maintains minimal design with proper spacing
 */
function Header() {
  // Get current location for active link styling
  const location = useLocation();

  return (
    // Custom header with sticky positioning
    <header className="custom-header">
      <div className="header-container">
        {/* Website brand/logo */}
        <Link to="/" className="header-brand">
          DIVYANSH.
        </Link>
        
        {/* Navigation menu */}
        <nav className="header-nav">
          <Link 
            to="/about" 
            className={`header-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            ABOUT
          </Link>
          {' '} {/* Space between links */}
          <Link 
            to="/blog" 
            className={`header-link ${location.pathname === '/blog' ? 'active' : ''}`}
          >
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;