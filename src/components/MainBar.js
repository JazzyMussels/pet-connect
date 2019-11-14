import React from 'react';
import '../css/MainBar.css'

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
                <h3>Location : {user.location}</h3>
                <h4> 1.5 Miles Away</h4>
                <h4>I am a {pet.gender} {pet.species}</h4>
                <br></br>
                <h4>About Me</h4>
               <p>{pet.bio}</p>
               <h5>Other Photos</h5>  
            </div>
        );
    }
}

export default MainBar