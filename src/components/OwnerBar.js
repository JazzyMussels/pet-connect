import React from 'react';
import '../css/OwnerBar.css'
import { Card, Icon, Image, Header, List, Button, Container } from 'semantic-ui-react'

class OwnerBar extends React.Component {
    render() {
        let user = this.props.currentUser.user
        // let pet = this.props.currentUser.pet
        // let userPhotos = this.props.currentUser.photos

        // console.log(user)
        // console.log(pet)
        // console.log(userPhotos)
        return (
        <div>
            <div className="OwnerContainer">
                <p>My Info:</p>
               <p>Name: {user.first_name}</p>
               <h2>Age: {user.age}</h2>
               <h2>Job: {user.job}</h2>
               <h3> I Identify as {user.gender} and I am {user.orientation} </h3>
               <h3>What I look for in a person: Someone who is {user.seeking_human}</h3>
               <h3>Animal my pet can interact with: {user.seeking_pet}</h3>
              </div>
               <br></br>
               <div className="OwnerContainerBio">
               <h3>About {user.first_name}:</h3>
               <p>{user.bio}</p>
            </div>
        </div>
        );
    }
}

export default OwnerBar