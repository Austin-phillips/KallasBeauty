import React, { Component } from 'react';
import { Button, Modal, Form, Input, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getSingleService } from '../actions/service';

class EditService extends Component {
  state = { name: '', price: '', time: '', description: '' }

  // editService = (id) => {
  //   const { name, price, time, description } = this.state;
  //   this.props.dispatch(getSingleService(this.props.id))
  //   this.setState({ name, price, time, description })
  // }
  
  render() {
    return (
      <div>
        <Modal trigger={<Button onClick={ () => this.editService()} primary>Edit</Button>}>
          <Modal.Header>Edit Service</Modal.Header>
          <Segment>
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
export default connect(mapStateToProps)(EditService);
