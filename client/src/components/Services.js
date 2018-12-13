import React, { Component } from 'react';
import { Header, Grid, Card, Segment, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getServices } from '../actions/service';
import AdminServices from './AdminServices';
import Wood from '../images/wood.jpg';
import AppointmentForm from './AppointmentForm';

class Services extends Component {

  componentDidMount() {
    this.props.dispatch(getServices())
  }

  displayServices = () => {
    const { services, user } = this.props;
    return services.map( service => {
      return(
        <Grid.Column
          key={service.id}
          computer={12}
          tablet={12}
          phone={12}
        >
          <Card centered raised fluid style={styles.box} >
            <Card.Content>
              <Card.Header>{service.name}</Card.Header>
              <Card.Meta> ${service.price}</Card.Meta>
              <Card.Meta>Duration of Service: {service.time} min</Card.Meta>
              <Card.Description>{service.description}</Card.Description>
              <Divider section />
              {this.props.user.id ? <AppointmentForm service={service} /> : <Link to='login'><Button color='blue'>Book Now</Button></Link>}
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }
  render() {
    const { admin } = this.props.user
    if ( admin === true )
    return (
      <AdminServices />
    );
    else 
    return (
      <div style={styles.background}>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center' style={styles.header}>Services</Header>
          <Divider section />
          <Grid columns={12}>
            <Grid.Row centered>
              {this.displayServices()}
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { services: state.services, user: state.user }
}

const styles = {
  box: {
    margin: '4px',
  },
  background: {
    width: '100%',
    background: `url(${Wood}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '25px',
    // height: '100vh',
  }
}

export default withRouter(connect(mapStateToProps)(Services));
