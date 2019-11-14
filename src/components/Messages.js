import React, {Component} from 'react'
import MessageIcons from './MessageIcons'

export default class Messages extends Component {

    renderMatchIcons = () => {
        return(
            this.props.currentUserMatchees.map(match => {
                return <MessageIcons key={match.id} matchee={this.props.otherUsers.get(match.id)}/>
            })
        )
    }

    
    render(){
        return(
            <div>
                <h1>Messages</h1>
                <input type="text" className="input" placeholder="Search Matches" />
                {this.renderMatchIcons()}                    
                </div>
        )
    }
}