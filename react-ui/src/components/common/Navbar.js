import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends React.Component {

  render() {
    return (
    <Navbar inverse >
        <Navbar.Header>
        <Navbar.Brand>
            <a href="/">Ascendance</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="/">
            Home
            </NavItem>
            <NavItem eventKey={2} href="/roster">
            Members
            </NavItem>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavBar;
