import React, { Component } from 'react';
import { Button, Modal, Form, Segment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions/appointment';
import { getServices } from '../actions/service';
import moment from 'moment';

class NewAppointment extends Component {
  state = { 
    first: '', 
    last: '', 
    date: moment(), 
    time: '', 
    service: '', 
    notes: '', 
    price: '',
    modalOpen: false }

  componentDidMount() {
    this.props.dispatch(getServices())
  }

  options = () => {
    return this.props.services.map( service => {
      return( 
        { key: `${service.id}`, text: `${service.name}`, value: `${service.name}`, price: `${service.price}`}
      )
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e, { name, value}) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { first, last, date, time, service, notes } = this.state;
    dispatch(addAppointment({ first, last, date, time, service, notes }));
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <div>
        <Modal
          trigger={<Button
            style={{ marginBottom: '15px' }}
            icon='plus'
            content='New Appointment'
            color='green'
            onClick={this.handleOpen}>
          </Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Book Appointment</Modal.Header>
          <Segment basic>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name='first'
                  autoFocus={true}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Last Name'
                  name='last'
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select 
                  onChange={this.handleChange}
                  name='service'
                  fluid 
                  label='Service' 
                  options={this.options()} 
                  placeholder='Service' 
                />
                <Form.Field label='Price' placeholder='$20'/>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Time'
                  name='time'
                  placeholder='Minutes'
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  label='Date'
                  name='date'
                  placeholder='MM/DD/YYYY'
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Notes'
                  name='notes'
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

const mapStateToProps = (state) => {
  return { services: state.services}
}


export default connect(mapStateToProps)(NewAppointment);