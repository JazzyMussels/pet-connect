import React from 'react';
import MainPhoto from './MainPhoto';
import MainBar from './MainBar';

class ConnectUser extends React.Component {
    render() {
        return (
            <div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                <MainPhoto currentUser={this.props.currentUser}/>
                <MainBar currentUser={this.props.currentUser}/>
                <button onClick={this.props.handleNextUser}>NO</button> <button>Yes</button> 
=======
                <ConnectMatchCards updateUser={this.props.updateUser} foundMatch={this.props.foundMatch} currentUser={this.props.currentUser} handleNextUser={this.props.handleNextUser} cardOnDisplay={this.props.cardOnDisplay}/>
                {/* <button onClick={this.props.handleNextUser}>NO</button> <button>Yes</button>  */}
>>>>>>> Stashed changes
=======
                <ConnectMatchCards updateUser={this.props.updateUser} foundMatch={this.props.foundMatch} currentUser={this.props.currentUser} handleNextUser={this.props.handleNextUser} cardOnDisplay={this.props.cardOnDisplay}/>
                {/* <button onClick={this.props.handleNextUser}>NO</button> <button>Yes</button>  */}
>>>>>>> Stashed changes
            </div>
        );
    }
}

export default ConnectUser