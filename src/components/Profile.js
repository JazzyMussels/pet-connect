import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Profile.css'
import MainPhoto from './MainPhoto';
import MainBar from './MainBar';
import OwnerBar from './OwnerBar';
import { Card, Icon, Image, Header, List, Button, Container } from 'semantic-ui-react'

export default class Profile extends Component {

    render(){
        let user = this.props.currentUser.user
        return(
            <div>
            <div className="profileContainer">
                <h2 className='profile-text'>Welcome Back, {user.first_name}!</h2>
                    <Link to='/messages'>See Messages</Link>
                    <Link to='/connect'>Make New Friends</Link>
                    <Link to='/settings'>Update Profile Settings</Link>
                    <Link to='/matches'>See Matches</Link>
                    <MainPhoto currentUser={this.props.currentUser}/>
                    <MainBar currentUser={this.props.currentUser}/>
                    <OwnerBar currentUser={this.props.currentUser}/>  
                    </div> 
                <br></br>
            
            </div>
        )
    }
}