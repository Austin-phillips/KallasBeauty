import React, { Component } from 'react';
import { Modal, Header, Segment } from 'semantic-ui-react';

class SingleImage extends Component {
  state = { modalOpen: this.props.modalOpen}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return(
      <div>
        <Modal
          closeIcon
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Header as='h2' textAlign='center'>Add New Image</Header>
        </Modal>
      </div>
    )
  }
}

export default SingleImage;