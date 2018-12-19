import React, { Component } from 'react';
import { Header, Grid, Card, Segment, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getServices, deleteService } from '../actions/service';
import EditService from './EditService';
import NewService from './NewService';
import Wood from '../assets/images/wood.jpg';

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
          <Card centered raised fluid style={styles.box} key={service.id} >
            <Card.Content>
              <Card.Header>{service.name}</Card.Header>
              <Card.Meta> ${service.price}</Card.Meta>
              <Card.Meta>Time: {service.time}</Card.Meta>
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
      <div style={styles.background}>
        <Segment basic textAlign='center'>
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

const styles = {
  box: {
    margin:'4px',
  },
  background: {
    width: '100%',
    background: `url(${Wood}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '0px',
  }
}

export default connect(mapStateToProps)(AdminServices);
