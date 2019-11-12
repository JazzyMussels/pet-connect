import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Connect from './Connect'
import Matches from './Matches'
import Messages from './Messages'
import { Switch, Route } from 'react-router-dom'; 
export default class MainBody extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/connect">
                        <Connect/>
                    </Route>
                    <Route path="/matches">
                        <Matches />
                    </Route>
                    <Route path="/messages">
                        <Messages />
                    </Route>
                    <Route path="/">
                        <Login setUser={this.props.setUser}/>
                    </Route>
                </Switch>      
            </div>
        )
    }
}