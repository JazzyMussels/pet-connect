import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserMatchCards from './UserMatchCards'

export default class Matches extends Component {

    renderMatchCards = () => {
            return(
                this.props.currentUserMatchees.map(match => {
                    return <UserMatchCards key={match.id} matchee={this.props.otherUsers.get(match.id)}/>
                })
            )
        }

    render(){
        return(
            <div>
                <h1>Your Current Matches</h1>
                <input type="text" className="input" placeholder="Search Matches" />
                {this.renderMatchCards()}
                <Link to='/connect'>NONE OF THESE WILL DO KEEP SWIPING</Link>
                </div>
        )
    }
}