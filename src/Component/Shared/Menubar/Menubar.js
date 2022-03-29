import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const Menubar = () => {
  const { users, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand className='text-white' >Ed-Tech</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
       
        {users.email && (
                <p className="text-white pt-2">
                  {" "}
                  <i className="far fa-user me-2"></i>
                  {users.displayName} {}{" "}
                </p>
              )}

              {users.email ? (
                <Button className="m-2" onClick={logOut}>
                  {" "}
                  Logout{" "}
                </Button>
              ) : (
                <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
              )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Menubar;