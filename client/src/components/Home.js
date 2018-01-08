import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Kallas Beauty</Header>
        <Image cloudName="kallasbeauty" publicId="fullsizeoutput_117e_bkcp6j.jpg" width="300" crop="scale" />
      </div>
    );
  }
}

export default Home;
