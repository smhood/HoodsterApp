import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar inverse >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Hoodster</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
