import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
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
import NewAppointment from './NewAppointment';
import { Button } from 'semantic-ui-react';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div>
      <NavBar>
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/newappointment' component={NewAppointment} />
          <ProtectedRoute exact path='/appointments' component={Appointments} />
          <ProtectedRoute exact path='/schedule' component={Schedule} />
          <ProtectedRoute path='/appointment/:id' component={SingleApp} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
      </NavBar>
      <Footer />
      </div>
    );
  }
}

export default App;

