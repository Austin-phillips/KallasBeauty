import React, { Component } from 'react';
import { Button, Header, Modal, Segment, Loader, Dimmer } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { handleUpload } from '../actions/images';

class NewImage extends Component {
  state = {fileUploading: this.props.fileUploading, modalOpen: false }

  toggleUploading = () => {
    const { fileUploading } = this.state;
    this.setState({ fileUploading: !fileUploading })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  onDrop = (images) => {
    this.toggleUploading();
    this.props.dispatch(handleUpload(images[0], this.toggleUploading ))
  }

  uploadDisplay = () => {
    if (this.state.fileUploading) {
      return (
        <Dimmer active>
          <Loader>Uploading Photo, Please Wait.</Loader>
        </Dimmer>
      )
    }
    else {
      return (
        <Segment basic>
          <Dropzone
            onDrop={this.onDrop}
            style={{ width: 'auto', height: '200px', border: '1px dashed black' }}
          >
            <Header as='h2' textAlign='center'>Click to Upload Photo</Header>
          </Dropzone>
          <Segment basic>
            <Button style={{ marginBottom: '15px'}} onClick={() => this.handleClose()} color='green' floated='right'>Done</Button>
          </Segment>
        </Segment>
      )
    }
  }

  render() {
    return(
      <Segment basic>
        <Modal trigger={<Button icon='plus' content='Add Image' color='green' onClick={this.handleOpen}></Button>} 
          closeIcon
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Header as='h2' textAlign='center'>Add New Image</Header>
          <Segment basic style={styles.uploader}>
            {this.uploadDisplay()}
          </Segment>
        </Modal>
      </Segment>
    )
  }
}

const styles = {
  uploader: {
    height: "200px",
  }
}

const mapStateToProps = (state) => {
  return { images: state.images}
}

export default connect(mapStateToProps)(NewImage);