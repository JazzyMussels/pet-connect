import React from 'react';
import '../css/MainPhoto.css'
import { Card, Icon, Image } from 'semantic-ui-react'
class MainPhoto extends React.Component {

    
    render() {
        let pet = this.props.currentUser.pet
        let userPhotos = this.props.currentUser.photos[0]
        return (
            <div className="photoPetContainer">
               <img className="imagePet"src={userPhotos.source} alt='doggo'/>
               <p>My {pet.species}, {pet.name}</p>
               <h2>{pet.age} years old</h2>
            </div>
        );
    }
}

export default MainPhoto