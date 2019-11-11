import React, { Component, Fragment } from 'react';
import { Pane, Image, Heading } from 'evergreen-ui'


class Header extends Component {

  render() {
    return (
      <Fragment>
          <Pane
              position='absolute'
              
              >
            <Heading color='#cacf33' fontFamily='ostrich' fontWeight='500px' fontSize='90px' marginTop='50px' marginLeft='110px'>PET CONNECT</Heading>
            </Pane>
        <Pane
  height={765}
  width='max'
  display="flex"
  alignItems="center"
  justifyContent="center"
  border="default"
>
  <Image src={process.env.PUBLIC_URL + '/images/petConnectBG.png'}></Image>
  </Pane>
      </Fragment>
    );
  }
}
export default Header;