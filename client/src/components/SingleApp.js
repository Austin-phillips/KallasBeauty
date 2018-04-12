import React, { Component } from 'react';
import { Header, Segment, } from 'semantic-ui-react';
import { getSingleApp } from '../actions/appointment';
import { connect } from 'react-redux';
import moment from 'moment';
class SingleApp extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.dispatch(getSingleApp(id))
  }

  render() {
    const { date, time, notes, email, created_at, service, first, last } = this.props.appointment
    return(
      <Segment basic textAlign='center'>
        <Header as='h1'>Client Name: {first} {last}</Header>
        <Header as='h3'>Service: {service}</Header>
        <Header as='h3'>Date: {date} at {time}</Header>
        <Header as='h3'>Notes: {notes}</Header>
        <Header as='h3'>Email: {email}</Header>
        <Header as='h3'>Appointment Created on: {moment(created_at).format("MM/DD/YYYY")}</Header>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { appointment: state.appointments }
}

export default connect(mapStateToProps)(SingleApp);