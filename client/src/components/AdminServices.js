import React, { Component } from 'react';
import { Header, Grid, Card, Segment, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getServices, deleteService } from '../actions/service';
import EditService from './EditService';
import NewService from './NewService';

class AdminServices extends Component {
  state = { editing: false }

  componentWillMount() {
    this.props.dispatch(getServices())
  }

  deleteService = (id) => {
    const deleted = window.confirm('Are you sure you want to delete?')
    if(deleted)
      this.props.dispatch(deleteService(id))
  }

  displayServices = () => {
    const { services } = this.props;
    return services.map(service => {
      return (
        <Grid.Column
          key={service.id}
          computer={12}
          tablet={12}
          phone={12}
        >
          <Card centered raised fluid style={style.box} key={service.id} >
            <Card.Content>
              <Card.Header>{service.name}</Card.Header>
              <Card.Meta> ${service.price}</Card.Meta>
              <Card.Meta>Time: {service.time} min</Card.Meta>
              <Card.Description>{service.description}</Card.Description>
              <Divider />
              <Button.Group>
                <EditService service={service} />
                <Button.Or />
                <Button icon='trash' content='Delete' color='red' onClick={() => this.deleteService(service.id)}></Button>
              </Button.Group>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }
  render() {
    return (
      <div>
        <Segment basic inverted textAlign='center'>
          <Header as='h1' textAlign='center'>Services</Header>
          <NewService />
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

const style = {
  box: {
    margin:'4px',
  },
}

export default connect(mapStateToProps)(AdminServices);
