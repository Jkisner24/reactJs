import React from "react";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button,} from "react-bootstrap"

const NavBar = () => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <img src="../../Nav.png" width="60"/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
        <Nav fill variant="tabs" className="mx-auto">
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#Envios">Envios</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Destacados</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mas vendidos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Outlet</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar>

)};

export default NavBar; 
