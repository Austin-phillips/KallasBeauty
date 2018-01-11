import React, { Component } from 'react';
import { Header, Grid, Card, Segment, Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getServices } from '../actions/service';
import EditService from './EditService';
import DeleteService from './DeleteService';

class Services extends Component {

  componentDidMount() {
    this.props.dispatch(getServices())
  }

  displayServices = () => {
    const { services } = this.props;
    return services.map( service => {
      if ( this.props.user.admin === true )
      return(
        <Grid.Column
          key={service.id}
          computer={12} 
          tablet={6} 
          phone={12} 
        >
          <Card centered raised fluid style={box} >
            <Card.Content>
              <Card.Header>{ service.name }</Card.Header>
              <Card.Meta> ${ service.price }</Card.Meta>
              <Card.Meta>Time: { service.time } min</Card.Meta>
              <Card.Description>{ service.description }</Card.Description>
              <Divider />
              <EditService />
              <DeleteService />
            </Card.Content>
          </Card>
        </Grid.Column>
      )
      else 
      return(
        <Grid.Column
          key={service.id}
          computer={12}
          tablet={6}
          phone={12}
        >
          <Card centered raised fluid style={box} >
            <Card.Content>
              <Card.Header>{service.name}</Card.Header>
              <Card.Meta> ${service.price}</Card.Meta>
              <Card.Meta>Time: {service.time} min</Card.Meta>
              <Card.Description>{service.description}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }
  render() {
    return (
      <div>
        <Segment>
          <Header as='h1' textAlign='center'>Services</Header>
        </Segment>
          <Grid columns={12}>
            <Grid.Row centered>
              {this.displayServices()}
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { services: state.services, user: state.user }
}

const box = {
  margin: '4px',
}

export default connect(mapStateToProps)(Services);
