import React from 'react';
import '../css/MainBar.css'
import { Card, Icon, Image, Header, List, Button, Container } from 'semantic-ui-react'
class MainBar extends React.Component {
    render() {
        
        let pet = this.props.currentUser.pet
        let user = this.props.currentUser.user
        // let userPhotos = this.props.currentUser.photos

        // console.log(user)
        // console.log(pet)
        // console.log(userPhotos)
        return (
            <div className="PetInfoContainer">    
                <p>Location : {user.location}</p>
                <h4> 1.5 Miles Away</h4>
                <h4>{pet.gender} {pet.species}</h4>
                <br></br>
                <p>About {pet.name}</p>
               <h3>{pet.bio}</h3>        
            </div>
        );
    }
}

export default MainBar