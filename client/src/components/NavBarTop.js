import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import '../assets/main.css';

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
        <Link to='/login'>
          <Menu.Item icon='user circle' name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    const { children, user } = this.props;
    if (user.admin === true)
    return (
      <div className='NavBar'>
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
          <Link to='/schedule'>
            <Menu.Item name='schedule' />
          </Link>
          { this.rightNavs() }
        </Menu>
          {children}
      </div>
    ) 
    return(
      <div>        <Menu pointing secondary>
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
          <Menu.Item name='Appointments' />
        </Link>
        {this.rightNavs()}
      </Menu>
        {children}</div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};


export default withRouter(connect(mapStateToProps)(NavBar));
