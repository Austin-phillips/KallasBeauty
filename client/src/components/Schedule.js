import React, { Component } from 'react';
import { Segment, Table, Button, Form } from 'semantic-ui-react';
import { getAllAppointments } from '../actions/allApps';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NewSchedule from './NewSchedule';

class Schedule extends Component {
  state = { date: '' }

  componentDidMount() {
    this.props.dispatch( getAllAppointments() )
  }

  handleChange = (e) => {
    this.setState({ date: e.target.value })
  }

  showAppointments = () => {
    const filteredApps = this.props.allApps.filter(
      (day) => {
        return day.date.indexOf(this.state.date) !== -1;
      }
    );
    if (this.props.allApps.length === 0)
      return (
        <Table.Row>
          <Table.Cell>No Appointments.</Table.Cell>
        </Table.Row>
      )
    else 
      return (
        (filteredApps.map(app => {
          return (
            <Table.Row key={app.id}>
              <Table.Cell>{app.first} {app.last}</Table.Cell>
              <Table.Cell>{moment(app.date).format("MM/DD/YYYY")} </Table.Cell>
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
    const { date } = this.state;
    return (
      <Segment basic textAlign='center' style={{ height: '1000px' }}>
        Please Select a Date
        <Form>
          <Form.Input style={styles.date} type='date' value={date} onChange={this.handleChange} widths='50%' />
        </Form>
        <NewSchedule />
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

const styles = {
  date: {
    width: '15%'
  }
}

const mapStateToProps = (state) => {
  return { allApps: state.allApps }
}

export default connect(mapStateToProps)(Schedule);