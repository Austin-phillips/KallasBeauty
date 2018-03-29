import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

class Schedule extends Component {
  render() {
    return(
      <Segment style={{ height: '1000px'}} basic textAlign='center'>
        <Header as='h1'>Schedule</Header>
      </Segment> 
    )
  }
}

export default Schedule;