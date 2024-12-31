import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">Divyansh.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav>
            <Nav.Link as={Link} to="/about">about</Nav.Link>
            <Nav.Link as={Link} to="/blog">blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
