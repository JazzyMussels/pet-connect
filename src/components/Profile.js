import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const API = "http://localhost:3000/users";

export default class Profile extends Component {

    constructor() {
        super();
        this.state={
            firstName: "",
            lastName: "",
            genderUser: "",
            orientation: "",
            ageUser: "",
            namePet: "",
            genderPet: "",
            species: "",
            agePet: "",
            photo: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`API/${this.props.currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json"
            },
            body: JSON.stringify (  
                this.state
            )
        })
        .then(resp => resp.json())
        .then(alert('Profile Successfully Updated')) 
    }
    
    render(){
        return(
            <div>
                <h1> Welcome Back, {this.props.currentUser.first_name}</h1>
                <br>
                </br>
                <h2>Choose an Option Below!</h2>
                <Link to='/messages'>See Messages</Link>
                <Link to='/connect'>Make New Friends</Link>
                <Link to='/settings'>Update Discovery Settings</Link>
                <br>
                </br>
                <form onSubmit={this.handleSubmit}>
            <label>USER INFO</label><br></br><br></br>
            <label>First Name <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" /> </label>
            <label>Last Name <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" /> </label>
            <label> Gender <input onChange={this.handleChange} value={this.state.genderUser} type="text" name="genderUser" /> </label>
            <label> Orientation <input onChange={this.handleChange} value={this.state.orientation} type="text" name="orientation" /> </label>
            <label> Age <input onChange={this.handleChange} value={this.state.ageUser} type="text" name="ageUser" /> </label>
            <br></br><br></br>
            <label>PET INFO</label><br></br><br></br>
            <label> Name <input onChange={this.handleChange} value={this.state.namePet} type="text" name="namePet" /> </label>
            <label> Gender <input onChange={this.handleChange} value={this.state.genderPet} type="text" name="genderPet" /> </label>
            <label> Species <input onChange={this.handleChange} value={this.state.species} type="text" name="species" /> </label>
            <label> Age <input onChange={this.handleChange} value={this.state.agePet} type="text" name="agePet" /> </label>
            <br></br><br></br>
            <label>PET PHOTOS </label><br></br><br></br>
            <label> Name <input onChange={this.handleChange} value={this.state.photo} type="text" name="photo" /> </label>
            <input type="submit" value="Submit" />
        </form> 
            </div>
        )
    }
}