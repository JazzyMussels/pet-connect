import React from 'react';
import MainPhoto from './MainPhoto';
import MainBar from './MainBar';

class ConnectUser extends React.Component {
    render() {
        return (
            <div>
                <MainPhoto currentUser={this.props.currentUser}/>
                <MainBar currentUser={this.props.currentUser}/>
                <button onClick={this.props.handleNextUser}>NO</button> <button>Yes</button> 
            </div>
        );
    }
}

export default ConnectUser