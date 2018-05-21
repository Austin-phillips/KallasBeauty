import React, { Component } from 'react';
import { Button, Modal, Form, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateService } from '../actions/service';

class EditService extends Component {
  state = {
    name: this.props.service.name,
    price: this.props.service.price,
    time: this.props.service.time,
    description: this.props.service.description,
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { name, price, time, description } = this.state;
    dispatch(updateService({ name, price, time, description }, this.props.service.id, this.props.history))
    this.setState({ modalOpen: false })
    this.forceUpdate()
  }

  render() {
    const { name, price, time, description } = this.props.service;
    return (
      <div>
        <Modal
          trigger={<Button icon='edit' content='Edit' primary onClick={this.handleOpen}></Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Edit Service</Modal.Header>
          <Segment basic>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Name'
                  name='name'
                  defaultValue={name}
                  autoFocus={true}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Price'
                  name='price'
                  defaultValue={price}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Time'
                  name='time'
                  defaultValue={time}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Description'
                  name='description'
                  defaultValue={description}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button color='green' type='submit'>Update</Button>
              <Button color='red' onClick={() => this.handleClose()}>Cancel</Button>
            </Form>
          </Segment>
        </Modal>
      </div>
    );
  }
}


export default connect()(EditService);