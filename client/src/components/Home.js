import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Wood from '../images/wood.jpg';

class Home extends Component {

  render() {
    return (
      <div style={styles.backgroundImage}>
        <div style={styles.header}>
          <Header as='h1' textAlign='center'>Bliss Beauty</Header>
        </div>
        <div style={styles.about}>
          <Header as='h1' textAlign='center'>About Me</Header>
        </div>
      </div>
    );
  }
}

const styles = {
  backgroundImage: {
    width: '100%',
    background: `url(${Wood}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '0px',
    height: '150vh'
  },
  header: {
    height: '200px',
    width: '100%',
    padding: '100px',
  },
  about: {
    marginTop: '200px',
    height: '200px',
    width: '100%',
    padding: '100px',
    background: 'white',
    color: 'black',
    position: 'fixed',
  }
}

export default Home;
