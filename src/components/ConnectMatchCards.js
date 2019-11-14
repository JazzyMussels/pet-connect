import React from 'react'
import {Link} from 'react-router-dom'

export default class ConnectMatchCards extends React.Component {
    render() {
        console.log(this.props.cardOnDisplay)
        return(
            <div>
               <img src={this.props.cardOnDisplay.photos[0].source} alt='doggo'></img>
               <h2>Name: {this.props.cardOnDisplay.pet.name}</h2>
               <h3>Age: {this.props.cardOnDisplay.pet.age}</h3>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <br></br>
            </div>
        )
    }
}