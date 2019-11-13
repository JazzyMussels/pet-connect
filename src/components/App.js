import React from 'react';
import NavBar from './NavBar'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MainBody from './MainBody';
// import './fonts/OstrichSans-Heavy.otf'
import { BrowserRouter} from 'react-router-dom';
const API ="http://localhost:3000/auto_login"


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
      <header className="App-header">
        <NavBar currentUser={this.state.currentUser}/>
        <Header />
        <MainBody setUser={this.setUser} currentUser={this.state.currentUser}/>
      </header>
    </div>
    </BrowserRouter>
  );
}
}
