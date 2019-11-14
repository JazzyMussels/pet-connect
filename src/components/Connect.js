import React from 'react';
import ConnectUser from './ConnectUser';

class Connect extends React.Component {

    renderConnectUser = () => {
        if (this.props.otherUsers.size > 0 && this.props.otherUsers.size - 1 >= this.props.matchIndex) {
            let cardOnDisplay = this.props.otherUsers.get(this.props.matchIndex) 
            if (cardOnDisplay)
                return <ConnectUser handleNextUser={this.props.handleNextUser} cardOnDisplay={cardOnDisplay}/>
            else 
                this.props.handleNextUser()
        }
        
    }

    render() {
        return(
            <div>
                {this.renderConnectUser()}
            </div>
        );
    }
}

export default Connect;