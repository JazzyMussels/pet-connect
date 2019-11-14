import React from 'react';
import ConnectMatchCards from './ConnectMatchCards'

class ConnectUser extends React.Component {
    render() {
        return (
            <div>
                <ConnectMatchCards cardOnDisplay={this.props.cardOnDisplay}/>
                <button onClick={this.props.handleNextUser}>NO</button> <button>Yes</button> 
            </div>
        );
    }
}

export default ConnectUser