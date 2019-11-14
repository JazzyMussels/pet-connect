import React, {Component} from 'react'
import { NavItem, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/NavBar.css"
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
      {/* <NavItem componentclass='span'> */}
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/connect">Connect</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/messages">Messages</Link>
        {this.props.loggedIn ? <Link onClick={this.props.handleLogin} to='/'>LogOut</Link > : <Link onClick={this.props.handleLogin} to='/'>LogIn</Link> }
      {/* </NavItem> */}
    </Navbar>
    )
  }
}