import React, { Component } from 'react';
import { Header, Segment, Form, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import background from '../images/hair.png'


class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div style={styles.backgroundImage} textAlign='center'>
        <Card centered raised style={styles.card}>
          <Header as='h1' textAlign='center'>Login</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label htmlFor='email'>Email</label>
              <input
                required
                id='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor='password'>Password</label>
              <input
                required
                id='password'
                value={password}
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment textAlign='center' basic>
              <Button primary type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Card>
      </div>
    );
  }
}

const styles = {
  card: {
    height: '400px',
    width: '400px',
    marginTop: '100px'
  },
  backgroundImage: {
    background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    padding: '0',
  },
}
export default connect()(Login);
