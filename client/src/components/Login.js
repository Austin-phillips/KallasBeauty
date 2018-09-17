import React, { Component } from 'react';
import { Header, Segment, Form, Button, Card, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import { Link, withRouter } from 'react-router-dom';
import Wood from '../images/wood.jpg'


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
      <div style={styles.backgroundImage}>
        <div style={styles.cardPosition}>
          <Card centered raised style={styles.card}>
            <Header style={styles.header} as='h1' textAlign='center'>Login</Header>
            <div style={styles.formPosition}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field >
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
                  <Button primary type='submit'>Login</Button>
                </Segment>
              </Form>
            </div>
            <Divider horizontal>Or</Divider>
            <Segment basic textAlign='center'>
              <Link to='register'>New User?</Link>
            </Segment>
          </Card>
        </div>
      </div>
    );
  }
}

const styles = {
  backgroundImage: {
    width: '100%',
    background: `url(${Wood}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '0px',
    height: '150vh'
  },
  formPosition: {
    margin: '50px'
  },
  cardPosition: {
    position: 'fixed',
    top: '18%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-150px'
  },
  header: {
    marginTop: '25px'
  }
}
export default withRouter(connect()(Login));
