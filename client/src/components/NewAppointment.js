import React, { Component } from 'react'
import { Table, Segment, Button, Form, Header } from 'semantic-ui-react'
import { getDays } from '../actions/day';
import { connect } from 'react-redux';
import moment from 'moment';
import { getAllTimes } from '../actions/time';
import AppointmentForm from './AppointmentForm';
import { getLastDate } from '../actions/lastDate';

class NewAppointment extends Component {
    state = { date: '', dayId: '' }

  componentDidMount() {
    this.props.dispatch(getDays())
    this.props.dispatch(getLastDate())
  }

  getTimes = (id) => {
    this.setState({ dayId: id })
    this.props.dispatch(getAllTimes(id))
    this.showTimes()
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
      return (<Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Times Available</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        <Table.Row textAlign='center' key={time.id}>
          <Table.Cell style={styles.font}>
            {time.time}
            <AppointmentForm 
              timeId={time.id} 
              time={time.time} 
              date={this.state.date}
              dayId={this.state.dayId}
            />
          </Table.Cell>
        </Table.Row>
        </Table.Body>
      </Table>
      )
    }))
  }

  handleChange = (e) => {
    this.setState({ date: e.target.value })
  }

  render() {
    const { date } = this.state;
    const { lastDate } = this.props;
    if(this.state.date === '')
    return(
      <Segment basic textAlign='center' style={styles.background}>
        {this.props.lastDate === null ?
          <Header>Sorry the schdule is not set up yet</Header> :
          <Header>The Furthest out you can book is: { moment(lastDate.date).format("MM/DD/YYYY")}</Header>}
        <Form>
          <Form.Input style={styles.date} type='date' value={date} onChange={this.handleChange} widths='50%' />
        </Form>
      </Segment>
    )
    else
    return(
      <Segment basic textAlign='center'>
        <Form>
          <Form.Input style={styles.date} type='date' value={date} onChange={this.handleChange} widths='50%' />
        </Form>
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
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { days: state.day, time: state.time, lastDate: state.lastDate }
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
  },
  date: {
    width: '15%'
  },
  background: {
    width: '100%',
    height: '100vh'
  }
}

export default connect(mapStateToProps)(NewAppointment);