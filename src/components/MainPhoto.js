import React from 'react';
import '../css/MainPhoto.css'
class MainPhoto extends React.Component {

    
    render() {
        let pet = this.props.currentUser.pet
        let userPhotos = this.props.currentUser.photos[0]
        return (
            <div className="photoPetContainer">
               <img className="imagePet"src={userPhotos.source} alt='doggo'></img>
               <h2>Name: {pet.name}</h2>
               <h3>Age: {pet.age}</h3>
            </div>
        );
    }
}

export default MainPhoto