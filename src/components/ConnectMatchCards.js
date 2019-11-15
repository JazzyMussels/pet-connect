import React from 'react'
import {Link} from 'react-router-dom'
import '../css/ConnectMatchCards.css'
const APIMATCH = "http://localhost:3000/match"
const APINOMATCH = "http://localhost:3000/nomatch"
export default class ConnectMatchCards extends React.Component {
    potentialMatch = () => {
       if (this.props.currentUser.matchees.find(matchee => matchee.id === this.props.cardOnDisplay.user.id)) {
           fetch(APIMATCH, {
            method : "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                matcherID: this.props.currentUser.user.id,
                matcheeID: this.props.cardOnDisplay.user.id
            })
            })
            .then(resp => resp.json())
            .then(response => {
                this.props.updateUser()
            })
        }
        else{
            fetch(APINOMATCH, {
                method : "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    matcherID: this.props.currentUser.user.id                
                })
            })
            .then(resp => resp.json())
            .then(response => {
                this.props.updateUser()
            })
            this.props.handleNextUser();
        } 
    }

    render() {

        return(
            <div className="ConnectMatchContainer">
                <img id="PetImage"src={this.props.cardOnDisplay.photos[0].source} alt='doggo'></img>
                <div className="PetInfo">Name: {this.props.cardOnDisplay.pet.name}</div>
                <div className="PetInfo">Age: {this.props.cardOnDisplay.pet.age}</div>
                <div id="Icons">
                    <i id="broken" onClick={this.props.handleNextUser} class="fas fa-heart-broken  fa-4x"></i>
                    <i id="notBroken"onClick={this.potentialMatch} class="fas fa-heart  fa-4x"></i>
                </div>
                {/* <Link className="petLinks" to='/profile'>Visit Profile</Link>
                <Link className="petLinks" to='/messages'>Send Message</Link> */}
            <br></br>
            </div>
        )
    }
}