import React, { Component, Fragment } from 'react';
import { Pane, Image, Heading } from 'evergreen-ui'


class Header extends Component {

  render() {
    return (
      <Fragment>

          <Pane
              position='absolute'
              >
            <Heading color='#cacf33' fontWeight='600' fontSize='90px' fontFamily= "Montserrat" marginTop='100px' marginLeft='610px'>PET CONNECT</Heading>
            </Pane>

            <Pane
            position='absolute'
            >
            <Image marginTop='80px' marginLeft='900px' src={process.env.PUBLIC_URL + '/images/logo.png'}></Image>
            </Pane>

        <Pane
  height='max'
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