import React from 'react';
import '../css/OwnerBar.css'
class OwnerBar extends React.Component {
    render() {
        let user = this.props.currentUser.user
        // let pet = this.props.currentUser.pet
        // let userPhotos = this.props.currentUser.photos

        // console.log(user)
        // console.log(pet)
        // console.log(userPhotos)
        return (
            <div className="OwnerContainer">
                <h1>Owner Info:</h1>
               <h2>Name: {user.first_name}</h2>
               <h2>Age: {user.age}</h2>
               <h2>Job: {user.job}</h2>
               <h3> I Identify as {user.gender} and I am {user.orientation} </h3>
               <h3>What I look for in a person: Someone who is {user.seeking_human}</h3>
               <h3>Animal my pet can interact with: {user.seeking_pet}</h3>
               <br></br>
               <h3>About Me:</h3>
               <p>{user.bio}</p>
            </div>
        );
    }
}

export default OwnerBar