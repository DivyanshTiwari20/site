import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar bg="" variant="dark" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand href="/">Divyansh.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/About">about</Nav.Link>
            <Nav.Link href="/BlogList">blog</Nav.Link>
            <Nav.Link href="/Contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
