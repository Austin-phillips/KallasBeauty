import React, { Component } from 'react'
import { Search, Grid, Header, Table, Segment, Button } from 'semantic-ui-react'
import { getDays } from '../actions/day';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import Day from './Day';
import moment from 'moment';
import { getAllTimes } from '../actions/time';
class NewApp extends Component {
    state = { date: '', time: '' }

  componentDidMount() {
    this.props.dispatch(getDays())
  }

  click = (id) => {
    this.props.dispatch(getAllTimes(id))
  }

  handleChange = (e) => {
    this.setState({ date: e.target.value })
  }
  render() {
    const { date } = this.state;
    const filteredDays = this.props.days.filter(
      (day) => {
        return day.date.indexOf(this.state.date) !== -1;
      }
    );
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='date' value={date} onChange={this.handleChange} />
        </form>
        <ul>
          {filteredDays.map( day => {
            return (
              <li 
                key={day.id}>{moment(day.date).format("MM/DD/YYYY")} 
                  <Button onClick={() => this.click(day.id)}>
                    click me
                  </Button>
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { days: state.day}
}

export default connect(mapStateToProps)(NewApp);