import React, { Component } from 'react';
import { Header, Grid, Segment, Image, Button } from 'semantic-ui-react';
import '../assets/main.css'
import { Link, withRouter } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div>
        <div className='homeHeader'>
          <Header className='homeLogo' as='h1' textAlign='center'>Blissful Beauty</Header>
        </div>
        <div className='homeContent'>
        {/* Mission Statement */}
          <Grid stackable columns='equal'>
            <Grid.Column>
              <Segment className='wrapper'>
                <div className='centerContent'>
                  <Header as='h1'>Mission Statement</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        {/* Jaiden Info */}
          <Header as='h2' textAlign='center'>About Jaiden</Header>
          <Grid stackable columns='equal'>
            <Grid.Column width={6}>
              <Segment className='wrapper'>
                <div className='centerContent'>
                  <Header as='h1'>Image</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment className='wrapper'>
                <div className='centerContent'>
                  <Header as='h1'>Info</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
          {/* Service Examples */}
          <Header as='h2' textAlign='center'>Examples of Work</Header>
          <Grid stackable columns={3}>
            <Grid.Column>
              <Segment className='wrapper'>
                <div className='centerContent'>
                  <Header as='h1'>Image</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className='wrapper'>
                <div className='centerContent'>
                  <Header as='h1'>Image</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className='wrapper'>
                <div className='centerContent'>
                  <Header as='h1'>Image</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
          <div className='wrapper'>
            <div className='centerContent homeMoreButton'>
              <Link to='gallery'><Button color='green'>View More Images</Button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
