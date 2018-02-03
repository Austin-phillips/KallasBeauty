import React, { Component } from 'react';
import { Header, Segment, Button, Divider, Grid, Loader, Dimmer } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { fetchImages, handleUpload } from '../actions/images';
import { Image, Transformation } from 'cloudinary-react';
import AdminGallery from './AdminGallery';

class Gallery extends Component {
  state = { fileUploading: false }

  componentDidMount() { 
    this.props.dispatch(fetchImages())
  }

  displayImages = () => {
    return this.props.images.map( image => {
      return(
        <Grid.Column width={4} key={image.id}>
          <Image
            cloudName='kallasbeauty'
            dpr="auto"
            responsive
            width="auto"
            crop="scale"
            publicId={image.publicId}
            >
          </Image>
        </Grid.Column>
      )
    })
  }

  render() {
    if(this.props.user.admin === true)
      return (
        <AdminGallery />
      )
    else
      return (
        <Segment basic>
          <Header as='h2' textAlign='center'>Gallery</Header>
          <Grid>
            <Grid.Row>
              {this.displayImages()}
            </Grid.Row>
          </Grid>
        </Segment>
      );
  }
}

const mapStateToProps = (state) => {
  return { images: state.images, user: state.user }
}

export default connect(mapStateToProps)(Gallery);