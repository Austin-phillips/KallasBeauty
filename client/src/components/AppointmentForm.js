import React, { Component } from 'react';
import { Button, Modal, Form, Segment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions/appointment';
import { getServices } from '../actions/service';
import { updateTime } from '../actions/time';
import moment from 'moment';

class AppointmentForm extends Component {
  state = { 
    first: '', 
    last: '', 
    date: this.props.date,
    dayId: this.props.dayId, 
    time: this.props.time, 
    timeId: this.props.timeId,
    service: '', 
    price: '',
    notes: '',
    taken: true,
    email: this.props.user.email,
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
    const { first, last, date, time, service, email, taken, dayId, timeId, notes } = this.state;
    dispatch(addAppointment({ first, last, date, time, service, email, notes }));
    dispatch(updateTime({ taken, time }, dayId, timeId, this.props.history))
    this.setState({ modalOpen: false })
  }

  render() {
    const { date, time } = this.state
    return (
      <div>
        <Modal
          trigger={<Button
            content='Select Time'
            color='blue'
            onClick={this.handleOpen}>
          </Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Book Appointment for {moment(date).format("dddd MMMM Do")} at {time}</Modal.Header>
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
              </Form.Group>
              <Button color='green' type='submit'>Book Now</Button>
              <Button color='red' onClick={() => this.handleClose()}>Cancel</Button>
            </Form>
          </Segment>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { services: state.services, user: state.user }
}


export default connect(mapStateToProps)(AppointmentForm);