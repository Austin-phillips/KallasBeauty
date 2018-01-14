import React, { Component } from 'react';
import { Header, Grid, Card, Segment, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getServices, deleteService } from '../actions/service';
import EditService from './EditService';
import DeleteService from './DeleteService';
import NewService from './NewService';

class AdminServices extends Component {

  componentDidMount() {
    this.props.dispatch(getServices())
  }

  deleteService = (id) => {
    window.confirm('Are you sure you want to delete?')
    this.props.dispatch(deleteService(id))
  }

  displayServices = () => {
    const { services } = this.props;
    return services.map(service => {
      return (
        <Grid.Column
          key={service.id}
          computer={12}
          tablet={6}
          phone={12}
        >
          <Card centered raised fluid style={box} key={service.id} >
            <Card.Content>
              <Card.Header>{service.name}</Card.Header>
              <Card.Meta> ${service.price}</Card.Meta>
              <Card.Meta>Time: {service.time} min</Card.Meta>
              <Card.Description>{service.description}</Card.Description>
              <Divider />
              <EditService id={service.id} />
              <Button color='red' onClick={() => this.deleteService(service.id)}>Delete</Button>
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
          <NewService />
        </Segment>
        <Segment basic inverted>
        <Grid columns={12}>
          <Grid.Row centered>
            {this.displayServices()}
          </Grid.Row>
        </Grid>
        </Segment>
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

export default connect(mapStateToProps)(AdminServices);
