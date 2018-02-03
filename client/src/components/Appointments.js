import React, { Component } from 'react';
import { Header, Segment, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getServices } from '../actions/service';
class Appointments extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.props.dispatch(getServices())
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { services: state.services}
}

export default connect(mapStateToProps)(Appointments);
