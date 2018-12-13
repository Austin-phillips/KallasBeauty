import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Divider, Button } from 'semantic-ui-react'
import Flash from './Flash';
import { Link, withRouter } from 'react-router-dom';
import { handleLogout } from '../actions/auth';
import { isBrowser } from 'react-device-detect';
import NavBarTop from './NavBarTop';
import { connect } from 'react-redux';



class NavBar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  toggleVisibilityLogout = () => {
    const { dispatch, history } = this.props;
    dispatch(handleLogout(history))
    this.setState({ visible: !this.state.visible })
  }

  rightNavs = () => {
    const { user } = this.props;

    if (user.id) {
      return (
        <Menu.Item
          icon='user circle' 
          name='Logout'
          onClick={() => this.toggleVisibilityLogout()}
        />
      );
    }
    return (
      <Link to='/login' onClick={() => this.toggleVisibility()}>
        <Menu.Item icon='user circle' name='Login' />
      </Link>
    );
  }

  adminNavs = () => {
    const { user } = this.props;
    if(user.admin === true)
      return(
        <div>
          <Divider section />
          <Link to='/' onClick={() => this.toggleVisibility()}>
            <Menu.Item name='home'/>
          </Link>
          <Divider section />
          <Link to='/gallery' onClick={() => this.toggleVisibility()}>
            <Menu.Item name='Gallery' />
          </Link>
          <Divider section />
          <Link to='/services' onClick={() => this.toggleVisibility()}>
            <Menu.Item name='Services' />
          </Link>
          <Divider section />
          <Link to='/schedule' onClick={() => this.toggleVisibility()}>
            <Menu.Item name='Schedule' />
          </Link>
          <Divider section />
        </div>
      )
    else 
    return(
      <div>
        <Divider section />
        <Link to='/' onClick={() => this.toggleVisibility()}>
          <Menu.Item name='home' />
        </Link>
        <Divider section />
        <Link to='/gallery' onClick={() => this.toggleVisibility()}>
          <Menu.Item name='Gallery' />
        </Link>
        <Divider section />
        <Link to='/services' onClick={() => this.toggleVisibility()}>
          <Menu.Item name='Services' />
        </Link>
        <Divider section />
      </div>
    )
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    if(isBrowser)
    return(
      <NavBarTop children={children} />
    )
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
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            {this.rightNavs()}
            {this.adminNavs()}
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

const styles = {
  button: {
    fontSize: '1.3em',
    textAlign: 'center',
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};
export default withRouter(connect(mapStateToProps)(NavBar));