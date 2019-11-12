import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <form>
                <label>LOGIN</label><br></br>
                <label> <input type="text" name="username" /> </label>
                <label> <input type="password" name="password" /> </label>
            </form>
        )
    }
}

export default Login;