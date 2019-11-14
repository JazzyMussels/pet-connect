import React from 'react';
import NavBar from './NavBar'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import MainBody from './MainBody';
// import './fonts/OstrichSans-Heavy.otf'
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
      .then(response => {
        this.setUser(response);
        this.getOtherUsers();
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

  getOtherUsers = () => {
    fetch(APIURL)
            .then(resp => resp.json())
            .then(resp => {
                const map = new Map();
                Object.keys(resp).forEach(key => map.set(parseInt(key), resp[key]));
                this.setState({
                  otherUsers: map
                });
            }) 
  }

  setUser = (user) => {
    this.setState({currentUser: user, loggedIn: true})    // routes ? as second param maybe
  }
  
  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar currentUser={this.state.currentUser} handleLogin={this.handleLogin} loggedIn={this.state.loggedIn}/>
        <Header />
        <MainBody setUser={this.setUser} currentUser={this.state.currentUser} handleNextUser={this.handleNextUser} otherUsers={this.state.otherUsers} matchIndex={this.state.index}/>
    </div>
    </BrowserRouter>
  );
}
}
