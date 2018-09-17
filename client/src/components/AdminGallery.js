import React, { Component } from 'react';
import { Header, Segment, Button, Divider, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchImages, deleteImage } from '../actions/images';
import { Image } from 'cloudinary-react';
import NewImage from './NewImage';

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
        <div>
          <Image
            cloudName='kallasbeauty'
            dpr="auto"
            responsive
            width="auto"
            crop="scale"
            publicId={image.publicId}
            border="3px_solid_black"
            key={image.id}
          >
          </Image>
          <Button floated='left' color='red' size='tiny' icon='trash' onClick={() => this.deleteImage(image.id)}></Button>
        </div>
      )
    })
  }

  render() {
    return (
      <Segment style={styles.background} basic textAlign='center'>
        <Header style={styles.header} as='h1'>Gallery</Header>
        <NewImage />
        <Divider section />
        <Grid>
          <Grid.Row>
            <Grid.Column computer={3} tablet={4} phone={12}>
              {this.displayImages()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  background: {
    width: '100%',
    height: '200vh'
  },
  header: {
    margin: '25px'
  }
}

const mapStateToProps = (state) => {
  return { images: state.images }
}

export default connect(mapStateToProps)(AdminGallery);