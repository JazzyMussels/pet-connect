import React from 'react';
import '../css/SignUp.css'
const API = "http://localhost:3000/signup";

export default class App extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        genderUser: "",
        orientation: "",
        job: '',
        ageUser: "",
        bioUser: '',
        location: '',
        searchRadius: '',
        seekingPet: '',
        seekingHuman: '',

        namePet: "",
        genderPet: "",
        species: "",
        agePet: "",
        bioPet: '',

        photo: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json"
            },
            body: JSON.stringify (  
                this.state
            )
        })
        .then(resp => resp.json())
        .then(console.log) 
    }

    render() {
        console.log(this.state);
        return (
            <div className='signupBG'>
            <form className='signUp-main-form' onSubmit={this.handleSubmit}>
            <fieldset>
              <legend><span class="number">1</span>Your Personal Deets</legend>
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
              <legend><span class="number">2</span>Tell Us Your Story!</legend>
              <textarea onChange={this.handleChange} value={this.state.bioUser} type="text" name="bioUser" placeholder="About Me..."></textarea>
            </fieldset>
            <fieldset>
                <legend><span class="number">3</span>Let's Get To Know Your Pet!</legend>
                <input onChange={this.handleChange} value={this.state.namePet} type="text" name="namePet" placeholder="Pet's Name" />
                <input onChange={this.handleChange} value={this.state.species} type="text" name="species" placeholder="Pet's Species" />
                <input onChange={this.handleChange} value={this.state.genderPet} type="text" name="genderPet" placeholder="Pet's gender" /> 
                <input onChange={this.handleChange} value={this.state.agePet} type="text" name="agePet" placeholder="Pet's Age" />
              </fieldset>
              <fieldset>
                <legend><span class="number">4</span>Say Something About Your Pet!</legend>
                <textarea onChange={this.handleChange} value={this.state.bioPet} type="text" name="bioPet" placeholder="About Me..."></textarea>
              </fieldset>
              <fieldset>
                <legend><span class="number">5</span>Upload a Pet Photo!</legend>
                <input onChange={this.handleChange} value={this.state.photo} type="text" name="photo" placeholder="Link To Pet Picture" />
              </fieldset>
            <button type="submit">Sign Up</button>
          </form>
          </div>
              )
    }
}
