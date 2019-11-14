import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Connect from './Connect'
import Profile from './Profile'
import Matches from './Matches'
import Messages from './Messages'
import Settings from './Settings'
import {Switch, Route } from "react-router-dom";

export default class MainBody extends Component {
    render() {
        return(
            <Switch>
                <Route path='/sign_up'><SignUp /></Route>
                <Route path='/profile'> {this.props.currentUser ? <Profile currentUser={this.props.currentUser}/> : <div></div>}</Route>
        <Route path='/connect' render={RouterProps => <Connect  {...RouterProps} currentUser={this.props.currentUser} handleNextUser={this.props.handleNextUser} otherUsers={this.props.otherUsers} matchIndex={this.props.matchIndex}/>}/>
                <Route path='/matches' render={RouterProps => <Matches {...RouterProps} currentUserMatchees={this.props.currentUser.matchees} otherUsers={this.props.otherUsers}/>}/>
                <Route path='/messages' render={RouterProps => <Messages {...RouterProps} currentUserMatchees={this.props.currentUser.matchees} otherUsers={this.props.otherUsers}/>}/>
                <Route path='/settings'><Settings currentUser={this.props.currentUser}/></Route>
                <Route exact path='/' render={(RouterProps) => this.props.currentUser ? RouterProps.history.push('/profile') : <Login {...RouterProps} setUser={this.props.setUser} currentUser={this.props.currentUser}/>}/>
            </Switch>
        )
    }
}