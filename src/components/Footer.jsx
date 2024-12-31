import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <hr />
      <Container className="d-flex justify-content-center align-items-center footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/divyansh-tiwari-47b2082aa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span> | </span>
          <a href="https://github.com/DivyanshTiwari20" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span> | </span>
          <a href="https://x.com/divyansh_ai" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
