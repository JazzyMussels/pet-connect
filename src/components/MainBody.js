import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Connect from './Connect'
import Matches from './Matches'
import Messages from './Messages'
export default class MainBody extends Component {
    render() {
        return(
            <div>
                {/* <Login />
                <SignUp /> */}
                <Connect />
            </div>
        )
    }
}