import React, {Component} from 'react'
import { Nav, Navbar} from 'react-bootstrap';
export default class NavBar extends Component {

render() {
return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">PetConnect</Navbar.Brand>
    <Nav>
      <Nav.Link href="#signUp">SignUp</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#settings">Settings</Nav.Link>
      <Nav.Link href="#connect">Connect</Nav.Link>
      <Nav.Link href="#matches">Matches</Nav.Link>
      <Nav.Link href="#messages">Messages</Nav.Link>
    </Nav>
  </Navbar>
)
}
}