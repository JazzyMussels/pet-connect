import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MatchCard from './MatchCard'

export default class Matches extends Component {

    renderMatchCards = () => {
        console.log(this.props.currentUserMatchees)
        if(this.props.users) {
            return(
                this.props.currentUserMatchees.map(match => {
                    return <MatchCard key={match.id} matchee={this.props.users.get(match.id)}/>
                })
            )
        }
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