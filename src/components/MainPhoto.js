import React from 'react';

class MainPhoto extends React.Component {

    
    render() {
        let pet = this.props.currentUser.pet
        let userPhotos = this.props.currentUser.photos[0]
        return (
            <div>
               <img src={userPhotos.source} alt='doggo'></img>
               <h2>Name: {pet.name}</h2>
               <h3>Age: {pet.age}</h3>
            </div>
        );
    }
}

export default MainPhoto