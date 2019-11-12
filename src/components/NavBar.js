import React, {Component} from 'react'
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class NavBar extends Component {



render() {
return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">PetConnect</Navbar.Brand>
    <Nav>
      <Nav.Link href="/sign_up">SignUp</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/settings">Settings</Nav.Link>
      <Nav.Link href="/connect">Connect</Nav.Link>
      <Nav.Link href="/matches">Matches</Nav.Link>
      <Nav.Link href="/messages">Messages</Nav.Link>
    </Nav>
  </Navbar>
)
}
}