import React, { Component } from 'react';
import { Header, Grid, Card, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getServices } from '../actions/service';
import AdminServices from './AdminServices';

class Services extends Component {

  componentDidMount() {
    this.props.dispatch(getServices())
  }

  displayServices = () => {
    const { services } = this.props;
    return services.map( service => {
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
    const { admin } = this.props.user
    if ( admin === true )
    return (
      <AdminServices />
    );
    else 
    return (
      <div>
        <Segment>
          <Header as='h1' textAlign='center'>Services</Header>
        </Segment>
        <Segment basic inverted>
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

const box = {
  margin: '4px',
}

export default connect(mapStateToProps)(Services);
