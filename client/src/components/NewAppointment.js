import React, { Component } from 'react'
import { Table, Segment, Button } from 'semantic-ui-react'
import { getDays } from '../actions/day';
import { connect } from 'react-redux';
import moment from 'moment';
import { getAllTimes } from '../actions/time';
import AppointmentForm from './AppointmentForm';

class NewAppointment extends Component {
    state = { date: '', dateId: '' }

  componentDidMount() {
    this.props.dispatch(getDays())
  }

  getTimes = (id) => {
    this.setState({ dateId: id })
    this.props.dispatch(getAllTimes(id))
  }

  showDate = () => {
    const filteredDays = this.props.days.filter(
      (day) => {
        return day.date.indexOf(this.state.date) !== -1;
      }
    );
    return( filteredDays.map(day => {
        return (
          <Table.Row textAlign='center' key={day.id}>
            <Button style={styles.showButton} color='green' onClick={() => this.getTimes(day.id)}>
              Show Times for {moment(day.date).format("MM/DD/YYYY")} 
            </Button>
          </Table.Row>
            )
    })
  )
  }

  showTimes = () => {
    return( this.props.time.map( time => {
      return(
        <Table.Row textAlign='center' key={time.id}>
          <Table.Cell style={styles.font}>
            {time.time}
            <AppointmentForm 
              timeId={time.id} 
              time={time.time} 
              date={this.state.date}
              dateId={this.state.dateId}
            />
          </Table.Cell>
        </Table.Row>
      )
    }))
  }

  handleChange = (e) => {
    this.setState({ date: e.target.value })
  }

  render() {
    const { date } = this.state;
    if(this.state.date === '')
    return(
      <Segment basic textAlign='center'>
        Please Select a Date
        <form>
          <input type='date' value={date} onChange={this.handleChange} />
        </form>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Date Selected</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Times Available</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
      </Segment>
    )
    else
    return(
      <Segment basic textAlign='center'>
        <form>
          <input type='date' value={date} onChange={this.handleChange} />
        </form>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Date Selected</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Body>
              {this.showDate()}
            </Table.Body>
        </Table>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Times Available</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Body>
              {this.showTimes()}
            </Table.Body>
        </Table>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { days: state.day, time: state.time }
}

const styles = {
  showButton: {
    margin: '15px'
  },
  timeButton: {
    marginLeft: '30px'
  },
  font: {
    fontSize: '20px'
  }
}

export default connect(mapStateToProps)(NewAppointment);