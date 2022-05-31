import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
  return (
    <header>
      <Navbar
        className="cat-nav"
        bg="light"
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto cat-nav-items">
              <Nav.Link as={Link} to="/products/rings" href="/products/rings">
                <Navbar.Text className="cat-item">Rings</Navbar.Text>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products/bracelets"
                href="/products/bracelets"
              >
                <Navbar.Text className="cat-item">Bracelets</Navbar.Text>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products/necklaces"
                href="/products/necklaces"
              >
                <Navbar.Text className="cat-item">Necklaces</Navbar.Text>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products/earrings"
                href="/products/earrings"
              >
                <Navbar.Text className="cat-item">Earrings</Navbar.Text>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" href="/contact">
                <Navbar.Text className="cat-item">Contacto</Navbar.Text>
              </Nav.Link>
              <Nav.Link as={Link} to="/about" href="/about">
                <Navbar.Text className="cat-item">Acerca de</Navbar.Text>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default CategoryHeader;
