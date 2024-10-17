import React from 'react';
import { Container } from 'react-bootstrap';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import twitterIcon from '../assets/twitter.png';

function Footer() {
  return (
    <footer className=" container footer mt-auto py-3 ">
      <hr />
      <Container className="d-flex justify-content-between align-items-center footer-content">
        <span>Divyansh Tiwari</span>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/divyansh-tiwari-47b2082aa/" target='blank'><img src={linkedinIcon} alt="LinkedIn" style={{ width: '30px', height: '30px' }} /></a>
          <a href="https://github.com/DivyanshTiwari20" target='blank'><img src={githubIcon} alt="GitHub" style={{ width: '30px', height: '30px' }} /></a>
          <a href="https://x.com/divyansh_ai" target='blank'><img src={twitterIcon} alt="Twitter" style={{ width: '30px', height: '30px' }} /></a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
