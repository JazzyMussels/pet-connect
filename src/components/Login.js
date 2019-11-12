import React from 'react';
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
            this.props.setUser(response.user);
            localStorage.token = response.token;
        })
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>LOGIN</label><br></br>
                <label> <input onChange={(event) =>this.handleInput(event)} value={this.state.username} type="text" name="username" /> </label>
                <label> <input onChange={(event) =>this.handleInput(event)} type="password" name="password" /> </label>
                <input type="submit" />
            </form>
        )
    }
}

export default Login;