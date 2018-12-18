import React, { Component } from 'react';
import { Button, Modal, Form, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addService } from '../actions/service';

const timeOptions = [
  { key: '1', text: '10 Min', value: '10 Min' },
  { key: '2', text: '15 Min', value: '15 Min' },
  { key: '3', text: '30 Min', value: '30 Min' },
  { key: '4', text: '1 Hour', value: '1 Hour' },
  { key: '5', text: '1.5 Hours', value: '1.5 Hours' },
  { key: '6', text: '2 Hours', value: '2 Hours' },
  { key: '7', text: '2.5 Hours', value: '2.5 Hours' },
]

class NewService extends Component {
  state = { name: '', price: '', time: '', description: '', modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { name, price, time, description } = this.state;
    dispatch(addService({ name, price, time, description }));
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <div>
        <Modal
          trigger={<Button 
                    style={{ marginBottom: '15px' }}
                    icon='plus' 
                    content='Add Service' 
                    color='green' 
                    onClick={this.handleOpen}>
                  </Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Create New Service</Modal.Header>
          <Segment basic>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Name'
                  name='name'
                  placeholder=' example: Microblading'
                  autoFocus={true}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Price'
                  name='price'
                  placeholder='00.00'
                  required
                  onChange={this.handleChange}
                />
                <Form.Select
                  fluid
                  required
                  name='time'
                  label='Time'
                  options={timeOptions}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Description'
                  name='description'
                  placeholder='Description'
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button color='green' type='submit'>Create</Button>
              <Button color='red' onClick={() => this.handleClose()}>Cancel</Button>
            </Form>
          </Segment>
        </Modal>
      </div>
    );
  }
}


export default connect()(NewService);