import React from 'react'
import '../css/Login.css'
const URLLOGIN ="http://localhost:3000/login"

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URLLOGIN, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json" 
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(response => {
            this.props.setUser(response);
            this.props.currentUser ?  this.props.history.push('/profile') : alert('bleh')
            localStorage.token = response.token;
        })
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="loginContainer">
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <input className="loginInput" required="true" id="loginUsername" onChange={(event) =>this.handleInput(event)} placeholder="username" value={this.state.username} type="text" name="username" />
                    <input className="loginInput" required="true" id="loginPassword" onChange={(event) =>this.handleInput(event)} placeholder="password"type="password" name="password" />
                    <input className="loginSubmit" type="submit" value="LOGIN"/>
                </form>
                <div id="bla" >Not a Member Yet?<span className="signup" onClick={() => this.props.history.push('/sign_up')}> Sign Up Here!</span></div>
            </div>
        )
    }
}

export default Login;