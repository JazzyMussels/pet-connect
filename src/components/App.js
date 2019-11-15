import React from 'react';
import NavBar from './NavBar'
import SiteHeader from './SiteHeader'
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
    index: 1 
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
      .then(response => {
          this.setUser(response)
        this.getOtherUsers()
      })
    }
  }

  handleNextUser = () => {
    this.setState((prevState) =>({index: prevState.index + 1}))
}

  setUser = (user) => {
    this.setState({currentUser: user})    // routes ? as second param maybe
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
    return (
      <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <NavBar currentUser={this.state.currentUser}/>
      {this.state.currentUser ? <SiteHeader/> : null }
        <MainBody setUser={this.setUser} currentUser={this.state.currentUser} handleNextUser={this.handleNextUser} otherUsers={this.state.otherUsers} matchIndex={this.state.index}/>
      </header>
    </div>
    </BrowserRouter>
  );
}
}
