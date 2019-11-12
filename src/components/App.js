import React from 'react';
import NavBar from './NavBar'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import MainBody from './MainBody'
// import './fonts/OstrichSans-Heavy.otf'
import {
  BrowserRouter as Router
} from "react-router-dom";

export default class App extends React.Component {
  

  
  render() {
    return (
      <Router>
      <div className="App">
      <header className="App-header">
        <NavBar />
        <Header />
        <MainBody />
      </header>
    </div>
    </Router>
  );
}
}
