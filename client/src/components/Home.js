import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import background from '../images/hair.png'

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
  backgroundImage: {
    background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    padding: '0',
  },
  fontColor: {
    color: 'white'
  }
}

export default Home;
