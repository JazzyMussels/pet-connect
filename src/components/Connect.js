import React from 'react';
import ConnectUser from './ConnectUser';

class Connect extends React.Component {

    renderConnectUser = () => {
        if (this.props.users.size > 0 && this.props.users.size-1 >= this.props.index) {
            let user = this.props.users.get(this.props.index) 
            if (user)
                return <ConnectUser handleNextUser={this.props.handleNextUser} currentUser={user}/>
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