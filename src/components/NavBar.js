import React, {Component} from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/NavBar.css"

export default class NavBar extends Component {
  render() {
    return(
      <Navbar bg="primary" variant="dark">
      <img src="../images/favicon32.png" />
         <Navbar.Brand href="/profile">PetConnect</Navbar.Brand>
         <Nav className="ml-auto">
           <Nav.Link href="/profile">Profile</Nav.Link>
           <Nav.Link href="/settings">Settings</Nav.Link>
           <Nav.Link href="/connect">Connect</Nav.Link>
           <Nav.Link href="/matches">Matches</Nav.Link>
           <Nav.Link href="/messages">Messages</Nav.Link>
           {this.props.loggedIn ? <Nav.Link onClick={this.props.handleLogin} href='/'>LogOut</Nav.Link > : <Nav.Link onClick={this.props.handleLogin} to='/'>LogIn</Nav.Link> }
         </Nav>
       </Navbar>
    )
  }
}