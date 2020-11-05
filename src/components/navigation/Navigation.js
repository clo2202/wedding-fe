import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import './Navigation.scss';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container fluid>
      <Navbar expanded={expanded} expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav>
              <Link to={"/"} className="nav-link" onClick={() => setExpanded(false)}>
                Welcome
              </Link>
            </Nav>
            <Nav>
              <Link to={"/event"} className="nav-link" onClick={() => setExpanded(false)}>
                Event Info
              </Link>
            </Nav>
            <Nav>
              <Link to={"/rsvp"} className="nav-link" onClick={() => setExpanded(false)}>
                RSVP
              </Link>
            </Nav>
            <Nav>
              <Link to={"/info"} className="nav-link" onClick={() => setExpanded(false)}>
                Hotels &amp; Travel
              </Link>
            </Nav>
            <Nav>
              <Link to={"/gallery"} className="nav-link" onClick={() => setExpanded(false)}>
                Gallery
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;