import React from "react";
import './Header.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand>Doctor Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink  className="nav-link" to="/about">About</NavLink>
            <NavLink   className="nav-link" to="/appointment">Appointment</NavLink>
            <NavLink  className="nav-link" to="/reviews">Reviews</NavLink>
            <NavLink  className="nav-link" to="/contact">Contact</NavLink>
            <NavLink  className="nav-link" to="/login">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
