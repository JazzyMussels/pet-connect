import React from 'react'
import '../css/Login.css'
const API ="http://localhost:3000/login"

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json" 
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.errors) {
                localStorage.token = "";
                alert(response.errors);
            }
            else {
                this.props.setAllUsers(response);
                this.props.handleLogin()
                this.props.history.push('/profile'); 
                localStorage.token = response.token;
            }
        })
    }
    
    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="loginContainer">
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <label>Welcome To Pet Connect!</label>
                    <input className="loginInput" required="true" id="loginUsername" onChange={(event) =>this.handleInput(event)} placeholder="Username..." value={this.state.username} type="text" name="username" />
                    <input className="loginInput" required="true" id="loginPassword" onChange={(event) =>this.handleInput(event)} placeholder="Password..."type="password" name="password" />
                    <input className="loginSubmit" type="submit" value="LOGIN"/>
                </form>
                <div id="bla" >Not a Member Yet?<span className="signup" onClick={() => this.props.history.push('/sign_up')}> Sign Up Here!</span></div>
            </div>
        )
    }
}

export default Login;