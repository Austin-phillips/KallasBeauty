import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {

  render() {
    return (
      <div style={styles.backgroundImage}>
        <Header style={styles.fontColor} as='h1' textAlign='center'>Bliss Beauty</Header>
      </div>
    );
  }
}

const styles = {
  fontColor: {
    color: 'white'
  }
}

export default Home;
