import React from 'react';
import NavBar from './NavBar'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import MainBody from './MainBody'
// import './fonts/OstrichSans-Heavy.otf'


export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <NavBar />
        <Header />
        <MainBody />
      </header>
    </div>
  );
}
}
