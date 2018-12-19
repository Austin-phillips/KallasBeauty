import React, { Component } from 'react';
import { Header, Grid, Card, Segment, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getServices } from '../actions/service';
import AdminServices from './AdminServices';
import AppointmentForm from './AppointmentForm';
import '../assets/main.css'

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
          phone={16}
        >
          <div className='serviceCard'>
            <Card centered raised fluid>
              <Card.Content>
                <Card.Header>{service.name}</Card.Header>
                <Card.Meta> ${service.price}</Card.Meta>
                <Card.Meta>Duration of Service: {service.time}</Card.Meta>
                <Card.Description>{service.description}</Card.Description>
                <Divider section />
                {this.props.user.id ? <AppointmentForm service={service} /> : <Link to='login'><Button color='blue'>Book Now</Button></Link>}
              </Card.Content>
            </Card>
          </div>
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
      <div>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>Services</Header>
          <Divider section />
          <Grid columns={16}>
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

export default withRouter(connect(mapStateToProps)(Services));
