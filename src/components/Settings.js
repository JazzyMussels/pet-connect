import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/Settings.css'
const API = "http://localhost:3000/users";


export default class Settings extends Component {

    constructor(props) {
        
        super(props);
        
        this.state={
            firstName: props.currentUser.user.first_name,
            lastName: props.currentUser.user.last_name,
            genderUser: props.currentUser.user.gender,
            orientation: props.currentUser.user.orientation,
            job: props.currentUser.user.job,
            ageUser: props.currentUser.user.age,
            bioUser: props.currentUser.user.bio,
            location: props.currentUser.user.location,
            search_radius: props.currentUser.user.search_radius,
            seeking_pet: props.currentUser.user.seeking_pet,
            seeking_human: props.currentUser.user.seeking_human,
            namePet: props.currentUser.pet.name,
            genderPet: props.currentUser.pet.gender,
            species: props.currentUser.pet.species,
            agePet: props.currentUser.pet.age,
            bioPet: props.currentUser.pet.bio,
            photo: props.currentUser.photos[0].source
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${API}/${this.props.currentUser.id}`, {
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
        console.log(this.props.currentUser)
        return(
            <div>
            <div className='settingsBG'>
            </div>
                    <form className='settings-main-form' onSubmit={this.handleSubmit}>
                    <fieldset>
                      <legend><span class="settings-number">1</span>Update Those Deets</legend>
                      <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" placeholder="First Name" />
                      <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" placeholder="Last Name" />
                      <input onChange={this.handleChange} value={this.state.genderUser} type="text" name="genderUser" placeholder="Gender" />
                      <input onChange={this.handleChange} value={this.state.orientation} type="text" name="orientation" placeholder="Sexual Orientation" />
                      <input onChange={this.handleChange} value={this.state.ageUser} type="text" name="ageUser" placeholder="Age" />
                      <input onChange={this.handleChange} value={this.state.job} type="text" name="job" placeholder="Job Industry" />
                      <input onChange={this.handleChange} value={this.state.location} type="text" name="location" placeholder="location" />
                      <input onChange={this.handleChange} value={this.state.searchRadius} type="text" name="searchRadius" placeholder="Search radius" />
                      <input onChange={this.handleChange} value={this.state.seekingPet} type="text" name="seekingPet" placeholder="Type of Pets You are Interested In" /> 
                      <input onChange={this.handleChange} value={this.state.seekingHuman} type="text" name="seekingHuman" placeholder="Type of Partner Sought" />
                    </fieldset>
                    <fieldset>
                      <legend><span class="settings-number">2</span>What's New?</legend>
                      <textarea onChange={this.handleChange} value={this.state.bioUser} type="text" name="bioUser" placeholder="About Me..."></textarea>
                    </fieldset>
                    <fieldset>
                        <legend><span class="settings-number">3</span>Change Your Pet Details!</legend>
                        <input onChange={this.handleChange} value={this.state.namePet} type="text" name="namePet" placeholder="Pet's Name" />
                        <input onChange={this.handleChange} value={this.state.species} type="text" name="species" placeholder="Pet's Species" />
                        <input onChange={this.handleChange} value={this.state.genderPet} type="text" name="genderPet" placeholder="Pet's gender" /> 
                        <input onChange={this.handleChange} value={this.state.agePet} type="text" name="agePet" placeholder="Pet's Age" />
                      </fieldset>
                      <fieldset>
                        <legend><span class="settings-number">4</span>Edit Information About Your Pet!</legend>
                        <textarea onChange={this.handleChange} value={this.state.bioPet} type="text" name="bioPet" placeholder="About Me..."></textarea>
                      </fieldset>
                      <fieldset>
                        <legend><span class="settings-number">5</span>Upload a New Pet Photo!</legend>
                        <input onChange={this.handleChange} value={this.state.photo} type="text" name="photo" placeholder="Link To Pet Picture" />
                      </fieldset>
                    <button type="submit">Sign Up</button>
                  </form>
                   <Link to='/profile'>Back To Profile</Link>
                  </div>
        //     <div>
        //         <br>
        //         </br>
        //         <h1>Update Settings</h1>
        //         <br></br>
        //         <br></br>
        //         <h2>Account Settings</h2>
        //         <form>
        //         Username: <input onChange={this.handleChange} value={this.state.firstName} type="text" name="Username" placeholder='Username'/><br></br>
        //         Password: <input onChange={this.handleChange} value={this.state.lastName} type="text" name="Password" placeholder='Password'/>
        //     </form>
        //     <form onSubmit={this.handleSubmit}>
        //         <br></br>
        //         <br></br>
        //     <label>UPDATE PHOTOS </label><br></br><br></br>
        //     <img src={this.state.photo} alt='pet'></img>
        //     <br></br>
        //     <br></br>
        //     <label>USER INFO</label>
        //     <br></br>
        //      <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" placeholder='First Name' /> 
        //     <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" placeholder=' Last Name' /> 
        //     <input onChange={this.handleChange} value={this.state.genderUser} type="text" name="genderUser" placeholder='Gender' /> 
        //       <input onChange={this.handleChange} value={this.state.orientation} type="text" name="orientation" placeholder='Orientation' /> 
        //       <input onChange={this.handleChange} value={this.state.job} type="text" name="job" placeholder='Job' /> 
        //       <input onChange={this.handleChange} value={this.state.ageUser} type="text" name="ageUser" placeholder='Age' /> 
        //       <input onChange={this.handleChange} value={this.state.bioUser} type="text" name="bioUser" placeholder='About Me'/> 
              
        //     <br></br><br></br>
        //     <label>PET INFO</label><br></br><br></br>
        //       <input onChange={this.handleChange} value={this.state.namePet} type="text" name="namePet" placeholder='Pet Name' /> 
        //       <input onChange={this.handleChange} value={this.state.genderPet} type="text" name="genderPet" placeholder='Pet Gender' /> 
        //       <input onChange={this.handleChange} value={this.state.species} type="text" name="species" placeholder='Pet Species' /> 
        //       <input onChange={this.handleChange} value={this.state.agePet} type="text" name="agePet" placeholder='Pet Age' /> 
        //       <input onChange={this.handleChange} value={this.state.bioPet} type="text" name="bioPet" placeholder='About Me' /> 
        //     <input type="submit" value="Submit" />
        // </form> 
        //     <br></br>
        //         <br></br>
        //         <h3>Search Settings</h3>
        //         <form>
        //         <input onChange={this.handleChange} value={this.state.location} type="text" name="location" placeholder='Location' />
        //         <input onChange={this.handleChange} value={this.state.search_radius} type="number" name="search_radius" placeholder='Search Radius' />
        //         <input onChange={this.handleChange} value={this.state.seeking_pet} type="text" name="seeking_pet" placeholder='Type of Pet Sought' />
        //         <input onChange={this.handleChange} value={this.state.seeking_human} type="text" name="seeking_human" placeholder='Type of Partner Sought'/>
        //         <p>Age Range: 18-80</p>
        //         <input type="submit" value="Submit" />
        //         </form>
        //         <br></br>
        //         <br></br>
        //         <h2>Contact Us</h2>
        //         <p>Actually don't bother</p>
        //         <br></br>
        //         <br></br>
        //         <Link to='/profile'>Back To Profile</Link>
               
        //         </div>
        )
    }
}