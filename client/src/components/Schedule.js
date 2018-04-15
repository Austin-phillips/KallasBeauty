import React, { Component } from 'react';
import { Segment, Table, Button, Form, Header } from 'semantic-ui-react';
import { getAllAppointments } from '../actions/allApps';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NewSchedule from './NewSchedule';
import { getLastDate } from '../actions/lastDate';

class Schedule extends Component {
  state = { date: '' }

  componentDidMount() {
    this.props.dispatch( getAllAppointments() )
    this.props.dispatch( getLastDate() )
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
    const { lastDate } = this.props;
    return (
      <Segment basic textAlign='center' style={{ height: '100vh' }}>
        Please Select a Date
        <Form>
          <Form.Input style={styles.date} type='date' value={date} onChange={this.handleChange} widths='50%' />
        </Form>
        {this.props.lastDate === null ?
          <Header floated='left'>You don't have the schedule setup yet...</Header> :
          <Header floated='left'>The Schedule ends on: {moment(lastDate.date).format("MM/DD/YYYY")}</Header>}
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
  return { allApps: state.allApps, lastDate: state.lastDate }
}

export default connect(mapStateToProps)(Schedule);