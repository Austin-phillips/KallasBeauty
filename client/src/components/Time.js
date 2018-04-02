import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAllTimes } from '../actions/time';

class Time extends Component {

  componentDidMount() {
    this.props.dispatch(getAllTimes())
  }

  render() {
    return(
      <Segment basic textAlign='center'>
        <Header>Here are the Time Slots</Header>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { time: state.time }
}

export default connect(mapStateToProps)(Time);