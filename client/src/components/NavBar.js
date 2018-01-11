import React, { Component } from 'react';
import { Dropdown, Menu} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Dropdown icon='user' item>
        <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/login'>Login</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/register'>Register</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/gallery'>
            <Menu.Item name='Gallery' />
          </Link>
          <Link to='/services'>
            <Menu.Item name='Services' />
          </Link>
          <Link to='/appointments'>
            <Menu.Item name='Book Appointment' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
