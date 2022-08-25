import React from "react";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import WidgetCart from "./WidgetCart";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Link className="navbar-brand" to={"/"}>
            <img src="../../Nav.png" width="60"/>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <WidgetCart />
        <Nav fill variant="tabs" className="mx-auto">
            <Nav.Link href="#Productos">Electronics</Nav.Link>
            <Nav.Link href="#Envios">TVs</Nav.Link>
            <NavDropdown title="Accesories and Supplies" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Headphones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cameras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Smartwatches</NavDropdown.Item>
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
    </>

)};

export default NavBar; 
