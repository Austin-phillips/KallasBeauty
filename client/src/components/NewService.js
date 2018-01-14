import React, { Component } from 'react';
import { Button, Modal, Form, Input, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSingleService } from '../actions/service';

class NewService extends Component {
  state = { name: '', price: '', time: '', description: '' }

  render() {
    return (
      <div>
        <Modal trigger={<Button color='green'>Create New Service</Button>}>
          <Modal.Header>Add Service</Modal.Header>
          <Segment basic>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='Service' placeholder='Name' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='Price' placeholder='0.00' />
                <Form.Field control={Input} label='Appointment length' placeholder='Minutes' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='Service description' placeholder='Description' />
              </Form.Group>
              <Form.Field color='green' control={Button}>Submit</Form.Field>
            </Form>
          </Segment>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { service: state.service }
}
export default connect(mapStateToProps)(NewService);