import React, { Component } from 'react';
import { Segment, Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAppointments } from '../actions/appointment';
import { Link, withRouter } from 'react-router-dom';

class Appointments extends Component {

  componentDidMount() {
    this.props.dispatch(getAppointments())
  }

  showAppointments = () => {
    if (this.props.appointments.length === 0)
    return(
      <Table.Row>
        <Table.Cell>No Appointments. Book one now</Table.Cell>
      </Table.Row>
    )
    else 
      return(
      (this.props.appointments.map( app => {
        return(
          <Table.Row key={app.id}>
            <Table.Cell>{app.first} {app.last}</Table.Cell>
            <Table.Cell>{app.date}</Table.Cell>
            <Table.Cell>{app.time}</Table.Cell>
            <Table.Cell>{app.service}</Table.Cell>
          </Table.Row>
        ) 
      })
    )
  )
  }

  render() {
    return (
      <Segment basic textAlign='center' style={{ height: '1000px'}}>
        <Link to='services'>
          <Button 
            floated='left'
            icon='plus'
            content='New Appointment'
            color='green'
          ></Button>
        </Link>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Service</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.showAppointments()}
            </Table.Body>
          </Table>
        </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { appointments: state.appointments}
}

export default withRouter(connect(mapStateToProps)(Appointments));