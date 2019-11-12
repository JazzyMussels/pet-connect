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
    Route,
    Link
  } from "react-router-dom";

export default class MainBody extends Component {

    constructor(){
        super();
        this.state = {
           
        }
    }
    render() {
        return(
            <Switch>
                <Route path='/'><Login /></Route>
                <Route path='/sign_up'><SignUp /></Route>
                <Route path='/profile'><Profile /></Route>
                <Route path='/connect'><Connect /></Route>
                <Route path='/matches'><Matches /></Route>
                <Route path='/messages'><Messages /></Route>
                <Route path='/settings'><Settings /></Route>
            </Switch>
        )
    }
}