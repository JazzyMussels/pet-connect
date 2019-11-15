import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Matches.css'

export default class UserMatchCards extends React.Component {
    render() {
        return(
            <div className='MatchphotoPetContainer'>
               <img className="MatchimagePet"src={this.props.matchee.photos[0].source} alt='doggo'></img>
               <p>Name: {this.props.matchee.pet.name}</p>
               <h3>Age: {this.props.matchee.pet.age}</h3>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <br></br>
            </div>
        )
    }
}