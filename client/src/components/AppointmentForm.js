import React, { Component } from 'react';
import { Button, Modal, Form, Segment, Divider, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addAppointment, getAppointments } from '../actions/appointment';

const available = [ 
  { key: '1', text: '10:00 AM', value: '10:00 AM', disabled: false},
  { key: '2', text: '10:30 AM', value: '10:30 AM', disabled: false},
  { key: '3', text: '11:00 AM', value: '11:00 AM', disabled: false},
  { key: '4', text: '11:30 AM', value: '11:30 AM', disabled: false},
  { key: '5', text: '12:00 PM', value: '12:00 PM', disabled: false},
  { key: '6', text: '12:30 PM', value: '12:30 PM', disabled: false},
  { key: '7', text: '1:00 PM', value: '1:00 PM', disabled: false},
  { key: '8', text: '1:30 PM', value: '1:30 PM', disabled: false},
  { key: '9', text: '2:00 PM', value: '2:00 PM', disabled: false},
  { key: '10', text: '2:30 PM', value: '2:30 PM', disabled: false},
  { key: '11', text: '3:00 PM', value: '3:00 PM', disabled: false},
  { key: '12', text: '3:30 PM', value: '3:30 PM', disabled: false},
  { key: '13', text: '4:00 PM', value: '4:00 PM', disabled: false},
  { key: '14', text: '4:30 PM', value: '4:30 PM', disabled: false},

]

class AppointmentForm extends Component {
  state = { 
    first: '', 
    last: '', 
    date: '',
    dayId: '', 
    length: this.props.service.time, 
    time: '',
    timeId: '',
    service: this.props.service.name, 
    price: this.props.service.price,
    notes: '',
    taken: true,
    email: (this.props.user.id ? this.props.user.email : ''),
    modalOpen: false }

  componentDidMount() {
    this.props.dispatch(getAppointments())
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e, { name, value}) => this.setState({ [name]: value })

  handleDateChange = (e, { name, value }) => {
    available.forEach((time) => {
      if(time.disabled === true) {
        time['disabled'] = false
      }
    })
    this.setState({ [name]: value })
    this.HandleDisabled(value)
  }

  HandleDisabled = (date) => {
    const { appointments } = this.props;

    appointments.forEach((app) => available.forEach((time, index, array) => {
      if(app.date === date && app.time === time['text']) {
        if(app.length === '60') {
          var hour = array[index + 1]
          time['disabled'] = true
          hour['disabled'] = true
        }else if (app.length === '90') {
          var hour = array[index + 1]
          var hourhalf = array[index + 2] 
          time['disabled'] = true
          hour['disabled'] = true
          hourhalf['disabled'] = true
        }else if (app.length === '120') {
          var hour = array[index + 1]
          var hourhalf = array[index + 2]
          var twohour = array[index + 3]
          time['disabled'] = true
          hour['disabled'] = true
          hourhalf['disabled'] = true
          twohour['disabled'] = true
        }else if (app.length === '180') {
          var hour = array[index + 1]
          var hourhalf = array[index + 2]
          var twohour = array[index + 3]
          var twohourhalf = array[index + 4]
          time['disabled'] = true
          hour['disabled'] = true
          hourhalf['disabled'] = true
          twohour['disabled'] = true
          twohourhalf['disabled'] = true
        } else {
          time['disabled'] = true
        }
    }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { first, last, date, time, service, email, notes, length } = this.state;
    dispatch(addAppointment({ first, last, date, time, service, email, notes, length }));
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <div>
        <Modal
          trigger={<Button
            content='Book Now'
            color='blue'
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
                <Form.Input
                  label='Email'
                  name='email'
                  value={this.state.email}
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Service' 
                  value={this.state.service}
                />
                <Form.Input
                  label='Duration' 
                  value={this.state.length + ' ' + 'Min'}
                />
                <Form.Input
                  label='Price' 
                  value={'$' + this.state.price}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input 
                  required
                  label='Date' 
                  type='date' 
                  name='date' 
                  // value={this.state.date} 
                  // onSelect={this.handleDateChange}
                  onChange={this.handleDateChange} 
                />
                <Form.Select
                  disabled={(this.state.date === '' ? true : false)}
                  fluid
                  required
                  name='time'
                  label='Time'
                  options={available}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button color='green' type='submit'>Book Now</Button>
              <Button color='red' onClick={() => this.handleClose()}>Cancel</Button>
              <Button color='blue' onClick={() => this.logArray()}>Log Array</Button>
            </Form>
          </Segment>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user, appointments: state.appointments }
}


export default connect(mapStateToProps)(AppointmentForm);