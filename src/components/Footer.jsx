import React from 'react';
import { Container } from 'react-bootstrap';

/**
 * Footer Component
 * - Provides social links
 * - Sticks to bottom of the page
 * - Maintains consistent styling with header
 */
function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/divyansh-tiwari-47b2082aa/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          {' | '}
          <a 
            href="https://github.com/DivyanshTiwari20" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            github
          </a>
          {' | '}
          <a 
            href="https://x.com/divyansh_ai" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;