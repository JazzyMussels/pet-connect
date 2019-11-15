import React from 'react';
import NavBar from './NavBar'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import MainBody from './MainBody';
import { BrowserRouter} from 'react-router-dom';
const API ="http://localhost:3000/auto_login"
const APIURL = "http://localhost:3000/connect"

export default class App extends React.Component {
  state = {
    currentUser: null,
    otherUsers : new Map(),
    index: 1,
    loggedIn: false
  }
  
  componentDidMount () {
    if (localStorage.token) { 
      fetch(API,{
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.token
        }
      })
      .then(resp => resp.json())
      .then(data => {
        this.setAllUsers(data);
        this.handleLogin();
      })
    }
  }

  handleNextUser = () => {
    this.setState((prevState) =>({index: prevState.index + 1}))
  }

  handleLogin = () => {
    if (this.state.loggedIn) 
      localStorage.token = "";
    this.setState((prevState) =>({loggedIn: !prevState.loggedIn}))
  }

  setUser = (user) => {
    this.setState({currentUser: user, loggedIn: true})    // routes ? as second param maybe
  }

  setAllUsers = (data) => {
    const map = new Map();
    debugger;
    for (const user of data.other_users.values()) {
      map.set(user.id, user[user.id])
    }
    debugger;
    this.setState({
      otherUsers: map,
      currentUser: {user: data.user, pet: data.pet, photos: data.photos, matchees: data.matchees, matchers: data.matchers}
    });

  }
  
  render() {
    console.log("APP", this.state)
    return (
      <BrowserRouter>
      <div className="App">
        {this.state.loggedIn ? <NavBar currentUser={this.state.currentUser} handleLogin={this.handleLogin} loggedIn={this.state.loggedIn}/> : <Header />}
        <MainBody setUser={this.setUser} currentUser={this.state.currentUser} handleLogin={this.handleLogin} setAllUsers={this.setAllUsers} handleNextUser={this.handleNextUser} matchIndex={this.state.index}/>
    </div>
    </BrowserRouter>
  );
}
}
