import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,

  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import Register from './Register';
import Reserve from './Reserve';
import Login from './Login';



export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>

          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Le-restaurant</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >


                  <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                  <Nav.Link as={Link} to={"/menu"}>Menu</Nav.Link>



                  <NavDropdown title="Account" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/reserve">Reserve</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>




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
          <div>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/login" element={<Login />} />




            </Routes>

          </div>

        </div>

      </Router>
    )
  }
}