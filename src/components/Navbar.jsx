import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { RiMapPinLine } from "react-icons/ri";

import "../assets/css/pokemon.css";

export default function Navigation() {
  return (
    <>
      <Navbar bg="secondary" variant="light">
        <Container className="justify-content-start">
          <Nav className="me-auto">
          <NavLink to="/"  className="mi-clase ms-3 text-decoration-none">
              <RiMapPinLine />
            </NavLink>
          </Nav>
          <Nav className="justify-content">
            <NavLink to="/" className="mi-clase ms-3 text-decoration-none">
              Home
            </NavLink>
            <NavLink to="/Pokemones"  className="mi-clase ms-3 text-decoration-none">
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}
