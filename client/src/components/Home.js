import React, { Component } from 'react';
import { Header, Grid, Segment, Image, Button, Divider } from 'semantic-ui-react';
import '../assets/main.css'
import { Link, withRouter } from 'react-router-dom';
import headshot from '../assets/images/headshot.jpg';
import homeimg1 from '../assets/images/homeimg1.jpg';
import homeimg2 from '../assets/images/homeimg2.jpg';
import homeimg3 from '../assets/images/homeimg3.jpg';
import {isMobile} from 'react-device-detect'

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
              <Segment basic className='wrapper'>
                <div className='centerContent'>
                  <p className='homeMission'>My purpose is to make people feel comfortable and beautiful inside and out. By enhancing someone’s perception of themselves I am able to open their eyes in seeing their beauty from within, both mentally and physically. #kallasbeauty </p>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
          <Divider />
        {/* Jaiden Info */}
          <Grid stackable columns='equal'>
            <Grid.Column width={6}>
              <Segment basic fluid className='wrapper'>
                <div className='centerContent'>
                  <Image className='homeImageRadius' size='medium' src={headshot} />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment basic className='wrapper'>
                <div className='centerContent'>
                  <p className={ isMobile ? 'homeAboutMeMobile' : 'homeAboutMe'}>Hello my name is Jaiden Kallas. I am a licensed cosmetologist specialized in eyelash extensions. I’ve been practicing cosmetology for 3+ years and absolutely love it. Growing up I’ve always been extremely fawned of the beauty industry, from watching makeup tutorials, hair videos, and practicing on my younger sister and dolls. In high school I made my dream happen and started cosmetology school early. Now I’m here 4 years later doing what I love most. I’m passionate about this field because of the response I get from my clients. Seeing someone’s face light up when they see the finished result is the most fulfilling feedback I can get. </p>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
          <Divider />
          {/* Service Examples */}
          <div className='wrapper'>
            <div className='centerContent'>
              <h2 className='homeWork'>My Work</h2>
            </div>
          </div>
          <Grid stackable columns={3}>
            <Grid.Column>
              <Segment basic className='wrapper'>
                <div className='centerContent'>
                  <Image className='homeImageRadius' size='medium' fluid src={homeimg1} />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic className='wrapper'>
                <div className='centerContent'>
                  <Image className='homeImageRadius' size='medium' fluid src={homeimg3} />
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic className='wrapper'>
                <div className='centerContent'>
                  <Image className='homeImageRadius' size='medium' fluid src={homeimg2} />
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
