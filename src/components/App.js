import React from 'react';
import NavBar from './NavBar'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import MainBody from './MainBody';
// import './fonts/OstrichSans-Heavy.otf'
import { BrowserRouter} from 'react-router-dom';
const API ="http://localhost:3000/auto_login"
<<<<<<< Updated upstream

=======
const APIURL = "http://localhost:3000/connect"
const APIUSER = "http://localhost:3000/users/"
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

export default class App extends React.Component {
  state = {
    currentUser: null
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
      })
    }
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  }

  handleNextUser = (value) => {
    if (value === 0)
      this.setState({index: value + 1})
    else     
      this.setState((prevState) =>({index: prevState.index + 1}))
  }

  handleLogin = () => {
    if (this.state.loggedIn) 
      localStorage.token = "";
    this.setState((prevState) =>({loggedIn: !prevState.loggedIn}))
  }

  foundMatch = () => {

  }

  updateUser = () => {

    if(this.state.currentUser !== null) {
      fetch(`${APIUSER}${this.state.currentUser.user.id}`)
      .then(resp => resp.json())
      .then (user =>{
        this.setUser(user);
      })
    }
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }

  setUser = (user) => {
    console.log("we're here", user)
    this.setState({currentUser: user})    // routes ? as second param maybe
  }
  
  render() {
    console.log("APPP", this.state);
    return (
      <BrowserRouter>
      <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <NavBar currentUser={this.state.currentUser}/>
        <Header />
        <MainBody setUser={this.setUser} currentUser={this.state.currentUser}/>
      </header>
=======
    {this.state.loggedIn ? <NavBar currentUser={this.state.currentUser} handleLogin={this.handleLogin} loggedIn={this.state.loggedIn}/> : <Header />}
        <MainBody foundMatch={this.foundMatch} updateUser={this.updateUser} setUser={this.setUser} currentUser={this.state.currentUser} handleNextUser={this.handleNextUser} otherUsers={this.state.otherUsers} matchIndex={this.state.index}/>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </div>
    </BrowserRouter>
  );
}
}
