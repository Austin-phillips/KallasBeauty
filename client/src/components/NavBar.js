import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Divider } from 'semantic-ui-react'
import Flash from './Flash';
import { Link, withRouter } from 'react-router-dom';
import { handleLogout } from '../actions/auth';
import { connect } from 'react-redux';



class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Item
          icon='user circle' 
          name='Logout'
          onClick={() => dispatch(handleLogout(history))}
        />
      );
    }
    return (
      <Link to='/login'>
        <Menu.Item icon='user circle' name='Login' />
      </Link>
    );
  }

  render() {
    const { children, visible } = this.props;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            {this.rightNavs()}
            <Divider section />
            <Link to='/'>
              <Menu.Item name='home' />
            </Link>
            <Divider section />
            <Link to='/gallery'>
              <Menu.Item name='Gallery' />
            </Link>
            <Divider section />
            <Link to='/services'>
              <Menu.Item name='Services' />
            </Link>
            <Divider section />
            <Link to='/appointments'>
              <Menu.Item name='Book Appointment' />
            </Link>
            <Divider section />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic style={{ padding: '0px'}}>
              <Flash />
              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));