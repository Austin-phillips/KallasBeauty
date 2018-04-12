import React, { Component } from 'react';
import { Button, Modal, Form, Segment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions/appointment';
import { getServices } from '../actions/service';
import { updateTime } from '../actions/time';
import axios from 'axios';
import { setFlash } from '../actions/flash';

class NewSchedule extends Component {
  state = { start: '', end: '' }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    const { start, end } = this.state;
    e.preventDefault();
    axios.post('/schedule', { start, end })
      .then( this.props.dispatch(setFlash('Schedule Successfully Created', 'green')))
      .catch( console.log('Error'))

    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <div>
        <Modal
          trigger={<Button
            content='Create Schedule'
            color='blue'
            onClick={this.handleOpen}
            floated='right'
            style={styles.button}
            >
          </Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Create Schedule</Modal.Header>
          <Segment basic>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  type='date'
                  label='Start Date'
                  name='start'
                  autoFocus={true}
                  required
                  onChange={this.handleChange}
                />
                <Form.Input
                  type='date'
                  label='End Date'
                  name='end'
                  required
                  onChange={this.handleChange}
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

const styles = {
  button: {
    marginTop: '0',
    marginRight: '15px',
    marginLeft: '15px',
    marginBottom: '15px'
  }
}

const mapStateToProps = (state) => {
  return { services: state.services, user: state.user }
}


export default connect(mapStateToProps)(NewSchedule);