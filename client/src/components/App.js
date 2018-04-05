import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Services from './Services';
import Appointments from './Appointments';
import Schedule from './Schedule';
import SingleApp from './SingleApp';
import Time from './Time';
import NewApp from './NewApp';
import { Segment, Button, Menu, Sidebar, Icon } from 'semantic-ui-react';

class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;
    return (
      <div>
      <Button 
        basic 
        size='large' 
        onClick={this.toggleVisibility} 
        icon='content' 
        content='Menu'
        style={styles.button}>
        </Button>
      <NavBar visible={visible}>
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/time' component={Time} />
          <Route exact path='/newapp' component={NewApp} />
          <ProtectedRoute exact path='/appointments' component={Appointments} />
          <ProtectedRoute exact path='/schedule' component={Schedule} />
          <ProtectedRoute path='/appointment/:id' component={SingleApp} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
      </NavBar>
      </div>
    );
  }
}

const styles = {
  button: {
    position: 'relative',
    fontSize: '1.3em',
    textAlign: 'center',
    top: '0',
    left: '0',
    zIndex: '9999',
    cursor: 'pointer',
  }
}

export default App;

