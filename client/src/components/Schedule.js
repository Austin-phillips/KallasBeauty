import React, { Component } from 'react';
import { Segment, Table, Button } from 'semantic-ui-react';
import { getAllAppointments } from '../actions/allApps';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Schedule extends Component {

  componentDidMount() {
    this.props.dispatch( getAllAppointments() )
  }

  client = () => {
    console.log('Button Clicked')
  }

  showAppointments = () => {
    if (this.props.allApps.length === 0)
      return (
        <Table.Row>
          <Table.Cell>No Appointments.</Table.Cell>
        </Table.Row>
      )
    else 
      return (
        (this.props.allApps.map(app => {
          return (
            <Table.Row key={app.id}>
              <Table.Cell>{app.first} {app.last}</Table.Cell>
              <Table.Cell>{app.date}</Table.Cell>
              <Table.Cell>{app.time}</Table.Cell>
              <Table.Cell>{app.service}</Table.Cell>
              <Table.Cell>
                <Link to={`/appointment/${app.id}`}>
                  <Button color='blue'>
                    View Client Info
                  </Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          )
        })
        )
      )
  }

  render() {
    return (
      <Segment basic textAlign='center' style={{ height: '1000px' }}>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Service</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
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
  return { allApps: state.allApps }
}

export default connect(mapStateToProps)(Schedule);