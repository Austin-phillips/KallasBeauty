import React, { Component } from 'react';
import { Header, Form, Button, Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
import Wood from '../images/wood.jpg';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '' };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser(email, password, passwordConfirmation, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <div basic>
        <div style={styles.backgroundImage}>
          <div style={styles.cardPosition}>
            <Card centered raised style={styles.card}>
            <Header style={styles.header} as='h1' textAlign='center'>Sign-Up</Header>
              <div style={styles.formPosition}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label htmlFor='email'>Email</label>
                    <input
                      id='email'
                      placeholder='Email'
                      required
                      value={email}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input
                      id='password'
                      placeholder='Password'
                      type='password'
                      required
                      value={password}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label htmlFor='passwordConfirmation'>Password Confirmation</label>
                    <input
                      id='passwordConfirmation'
                      placeholder='Password Confirmation'
                      type='password'
                      required
                      value={passwordConfirmation}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Segment basic textAlign='center'>
                    <Button type='submit'>Submit</Button>
                  </Segment>
                </Form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  card: {
    height: '400px',
    width: '400px',
  },
  cardPosition: {
    width: '100%',
    height: '500px',
    padding: '200px'
  },
  backgroundImage: {
    width: '100%',
    background: `url(${Wood}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '0px',
    height: '100vh'
  },
  formPosition: {
    margin: '25px'
  },
  header: {
    marginTop: '25px'
  }
}

export default connect()(Register);
