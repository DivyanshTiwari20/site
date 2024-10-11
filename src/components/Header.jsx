import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="" variant="dark" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand href="#">Divyansh.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#blog">blog</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
