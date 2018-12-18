import React, { Component } from 'react';
import { Header, Form, Button, Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { passwordReset } from '../actions/auth';
import { setFlash } from '../actions/flash';
import Wood from '../images/wood.jpg';

class ResetPassword extends Component {
  state = { password: '', passwordConfirmation: '' , id: this.props.match.params.id};

  handleSubmit = event => {
    event.preventDefault();
    const { id, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(passwordReset( password, passwordConfirmation, id, history));
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
      <div>
        <div style={styles.backgroundImage}>
          <div style={styles.cardPosition}>
            <Card centered raised style={styles.card}>
              <Header style={styles.header} as='h1' textAlign='center'>Sign-Up</Header>
              <div style={styles.formPosition}>
                <Form onSubmit={this.handleSubmit}>
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
                    <Button disabled={(password === passwordConfirmation ? false : true)} color='blue' type='submit'>Submit</Button>
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
  formPosition: {
    margin: '50px'
  },
  backgroundImage: {
    width: '100%',
    background: `url(${Wood}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '0px',
    height: '100vh'
  },
  cardPosition: {
    position: 'fixed',
    top: '30%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-150px'
  },
  header: {
    marginTop: '25px'
  }
}

export default connect()(ResetPassword);
