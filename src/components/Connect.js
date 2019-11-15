import React from 'react';

import ConnectUser from './ConnectUser';

const APIURL = "http://localhost:3000/connect"
class Connect extends React.Component {
    
    state = {
        users: new Map(),
        index: 1
    }
    componentDidMount() {
        fetch(APIURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'userID': this.props.currentUser.user.id
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            const map = new Map();
            Object.keys(resp).forEach(key => map.set(parseInt(key), resp[key]));
            this.setState({users: map});
        });     

    }

    renderConnectUser = () => {
        if (this.props.otherUsers.size > 0 && this.props.otherUsers.size - 1 >= this.props.matchIndex) {
            let cardOnDisplay = this.props.otherUsers.get(this.props.matchIndex) 
            if (cardOnDisplay && this.props.currentUser.user.id !== cardOnDisplay.user.id && !this.props.currentUser.matchers.find(match => match.id === cardOnDisplay.user.id))
                return <ConnectUser updateUser={this.props.updateUser} foundMatch={this.props.foundMatch} currentUser={this.props.currentUser} handleNextUser={this.props.handleNextUser} cardOnDisplay={cardOnDisplay}/>
            else 
                this.props.handleNextUser();
        }
        else 
            this.props.handleNextUser(0); 
    }

    render() {
        console.log(this.state);
        return(
            <div>
                {this.renderConnectUser()}
            </div>
        );
    }
}

export default Connect;