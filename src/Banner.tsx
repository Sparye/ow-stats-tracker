import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Banner.css";

export default function Banner() {
  return (
    <div>
      <Navbar sticky="top" className="nav" variant="dark">
        <Container>
          <Navbar.Brand>Overwatch Stats Tracker</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
// bg="dark" variant="light"
