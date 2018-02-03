import React, { Component } from 'react';
import { Header, Segment, Button, Divider, Grid, Loader, Dimmer } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { fetchImages, handleUpload, deleteImage } from '../actions/images';
import { Image, Transformation } from 'cloudinary-react';
import NewImage from './NewImage';
import SingleImage from './SingleImage';

class AdminGallery extends Component {

  componentDidMount() {
    this.props.dispatch(fetchImages())
  }

  deleteImage = (id) => {
    const deleted = window.confirm('Are you sure you want to delete?')
    if (deleted)
      this.props.dispatch(deleteImage(id))
  }

  displayImages = () => {
    return this.props.images.map(image => {
      return (
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
          <Button color='red' size='tiny' icon='trash' onClick={() => this.deleteImage(image.id)}></Button>
        </Grid.Column>
      )
    })
  }

  render() {
    return (
      <Segment basic>
        <Header as='h2' textAlign='center'>Gallery</Header>
        <NewImage />
        <Segment basic>
          <Grid>
            <Grid.Row>
              {this.displayImages()}
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { images: state.images }
}

export default connect(mapStateToProps)(AdminGallery);