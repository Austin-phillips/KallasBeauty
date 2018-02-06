import React, { Component } from 'react';
import { Header, Segment, Divider, Grid} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/images';
import { Image } from 'cloudinary-react';
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
            border="3px_solid_black"
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
          <Header 
            as='h1' 
            textAlign='center'
            style={{ marginBottom: '10px'}}
          >
            Gallery
          </Header>
          <Divider section />
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
  return { images: state.images, user: state.user }
}

export default connect(mapStateToProps)(Gallery);