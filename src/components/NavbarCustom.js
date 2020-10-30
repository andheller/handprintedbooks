import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarCustom(props) {
  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand></Navbar.Brand>
        </Link>

        <Link href="/">
          <a className="logoTitle">
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
            Handprinted Books
          </a>
        </Link>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <NavDropdown title="Books">
              <Link href="/old-macdonalds-handprint-farm" passHref>
                <NavDropdown.Item>
                  Old MacDonald's Handprint Farm
                </NavDropdown.Item>
              </Link>

              <Link href="/i-love-you-always-everywhere" passHref>
                <NavDropdown.Item>
                  I Love You Always, Everywhere
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <Link href="/tips" passHref>
              <Nav.Link active={false}>Tips</Nav.Link>
            </Link>

            <Nav.Link href="https://forms.gle/5bZbYeTqFroqyerq9" active={false}>
              Feedback
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
