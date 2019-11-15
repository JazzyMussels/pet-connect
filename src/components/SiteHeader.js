import React, { Component} from 'react';
import '../css/Header.css'

class SiteHeader extends Component {

  render() {
    return (
      <div className='header' id='main-header'>
          <h1 id='pet-text'>PET CONNECT</h1>
          <img id='pet-header-logo' src={process.env.PUBLIC_URL + '/images/logo.png'} alt='Logo' />
      </div>
    )
  }
}
 
export default SiteHeader;