import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserMatchCards from './UserMatchCards'
import '../css/Matches.css'

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
            <div className='match-parent'>
                <div className='match-search'>
                <div>Your Current Matches</div>
                <input type="text" className="input" placeholder="Search Matches" />
                </div>
                {this.renderMatchCards()}
                {/* <Link to='/connect'>NONE OF THESE WILL DO KEEP SWIPING</Link> */}
                </div>
        )
    }
}