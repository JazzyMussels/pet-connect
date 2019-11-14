import React from 'react'
import {Link} from 'react-router-dom'

export default class UserMatchCards extends React.Component {
    render() {
        return(
            <div>
               <img src={this.props.matchee.photos[0].source} alt='doggo'></img>
               <h2>Name: {this.props.matchee.pet.name}</h2>
               <h3>Age: {this.props.matchee.pet.age}</h3>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <br></br>
            </div>
        )
    }
}