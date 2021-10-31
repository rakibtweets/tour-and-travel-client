import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const { user, userSignOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="py-3 px-3"
        bg="dark"
        variant="dark"
      >
        <Container fluid>
          <Nav.Link as={Link} to="/home" className="fw-bold h4 text-success">
            Tour And Travel
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-lg-auto text-center ">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/destination">
                Destination
              </Nav.Link>
              <Nav.Link as={Link} to="/myTourList">
                My Tour List
              </Nav.Link>
              {user.email && (
                <Nav.Link as={Link} to="/manageTours">
                  Mange All Tour
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} to="/addDestination">
                  Add Destination
                </Nav.Link>
              )}
            </Nav>
            {!user?.email ? (
              <Nav className="text-center">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="text-center">
                <Nav.Link className="text-secondary">
                  {user?.displayName}
                </Nav.Link>

                <Nav.Link
                  onClick={userSignOut}
                  className="bg-danger rounded-pill px-4"
                >
                  Log Out
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
