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
        // return < ConnectUser currentUser={this.props.currentUser}/> works
        if (this.state.users.size > 0 && this.state.users.size-1 >= this.state.index) {
            let user = this.state.users.get(this.state.index) 
            if (user)
                return <ConnectUser handleNextUser={this.handleNextUser} currentUser={user}/>
            else 
                this.handleNextUser()
        }

    }

    handleNextUser = () => {
        this.setState((prevState) =>({index: prevState.index + 1}))
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