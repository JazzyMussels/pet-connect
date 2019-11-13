import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Connect from './Connect'
import Profile from './Profile'
import Matches from './Matches'
import Messages from './Messages'
import Settings from './Settings'

import {
    Switch,
    Route
  } from "react-router-dom";

  const APIURL = "http://localhost:3000/connect"

export default class MainBody extends Component {

    constructor(){
        super();
        this.state = {
            users: new Map(),
            index: 1  
        }
    }

        componentDidMount() {
            if (this.props.currentUser) {
            fetch(APIURL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'userID': this.props.currentUser.user.id
                }
            })
            .then(resp => resp.json())
            .then(resp => {
                console.log("RESP",resp)
                const map = new Map();
                Object.keys(resp).forEach(key => map.set(parseInt(key), resp[key]));
                this.setState({users: map});
            })  
         }
        }
    
        handleNextUser = () => {
            this.setState((prevState) =>({index: prevState.index + 1}))
        }

    render() {
        console.log(this.props)
        console.log(this.state)
        return(
            <Switch>
                <Route path='/sign_up'><SignUp /></Route>
                <Route path='/profile'> {this.props.currentUser ? <Profile currentUser={this.props.currentUser}/> : <div></div>}</Route>
                <Route path='/connect'> {this.props.currentUser ? <Connect currentUser={this.props.currentUser} {...this.state} handleNextUser={this.handleNextUser}/> : <div></div>}</Route>
                <Route path='/matches'> {this.props.currentUser ? <Matches currentUserMatchees={this.props.currentUser.matchees} users={this.state.users}/> : <div></div>}</Route>
                <Route path='/messages'><Messages /></Route>
                <Route path='/settings'><Settings currentUser={this.props.currentUser}/></Route>
                <Route path='/' render={(RouterProps) => this.props.currentUser ? RouterProps.history.push('/profile') : <Login {...RouterProps} setUser={this.props.setUser} currentUser={this.props.currentUser}/>}/>
            </Switch>
        )
    }
}