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
                <Route path='/connect' render={RouterProps => <Connect  {...RouterProps} currentUser={this.props.currentUser} handleNextUser={this.props.handleNextUser}  matchIndex={this.props.matchIndex}/>}/>
                <Route path='/matches' render={RouterProps => <Matches {...RouterProps} currentUserMatchees={this.props.currentUser.matchees} />}/>
                <Route path='/messages' render={RouterProps => <Messages {...RouterProps} currentUserMatchees={this.props.currentUser.matchees} />}/>
                <Route path='/settings'><Settings currentUser={this.props.currentUser}/></Route>
                <Route exact path='/' render={(RouterProps) => <Login {...RouterProps} setUser={this.props.setUser} handleLogin={this.props.handleLogin} setAllUsers={this.props.setAllUsers}/>}/>
                {/* this.props.currentUser ? RouterProps.history.push('/profile') :  */}
            </Switch>
        )
    }
}