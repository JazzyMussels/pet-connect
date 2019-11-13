import React, {Component} from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

export default class NavBar extends Component {

render() {
return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">PetConnect</Navbar.Brand>
    <Nav>
      <Nav.Link><Link to="/sign_up">SignUp</Link></Nav.Link>
      <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
      <Nav.Link><Link to="/settings">Settings</Link></Nav.Link>
      <Nav.Link><Link to="/connect">Connect</Link></Nav.Link>
      <Nav.Link><Link to="/matches">Matches</Link></Nav.Link>
      <Nav.Link><Link to="/messages">Messages</Link></Nav.Link>
    </Nav>
  </Navbar>
)
}
}