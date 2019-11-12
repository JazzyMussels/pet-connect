import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import { Button} from 'react-bootstrap';
import Profile from './Profile'

class Login extends React.Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

   

    // render= {RouterProps => <Profile {...RouterProps}/>}
    // goToSignUp = (event) => {
    //     // event.preventDefault();
    // }

    render() {
        return (
            <div>
            <form>
                <label>LOGIN</label><br></br>
                <label><input onChange={this.handleChange} value={this.state.username} type="text" name="username" placeholder='Username'/> </label>
                <label><input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder='Password'/> </label>
                <Link to='/profile/' render={() => <Profile />}>
                <button type='submit'>Enter The Site</button>
                </Link>
                
            </form>
            <br></br>
            <p>Not a Member Yet? Sign Up Here</p>
            <button onClick={(e) => this.goToSignUp(e)}>Sign Up!</button>
            </div>
        )
    }
}

export default Login;