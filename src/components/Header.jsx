import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="" variant="dark" expand="lg">
      <Container className="justify-content-between">
        {/* Changed href to as and Link for Navbar.Brand */}
        <Navbar.Brand as={Link} to="/">Divyansh.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/* Changed href to as and to props for proper routing */}
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