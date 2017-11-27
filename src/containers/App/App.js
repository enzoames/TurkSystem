import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';

import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
import { load as loadAuth, logout } from '../../actions/Auth/actions';

//RESET ACTIONS
import { resetBid, resetClientSDs } from '../../actions/Auth/actions';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];
    // if (!isAuthLoaded(getState())) {
    //   promises.push(dispatch(loadAuth()));
    // }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    user: state.auth.user
  }),
  { logout, resetBid, resetClientSDs, pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    resetBid: PropTypes.func.isRequired,
    resetClientSDs: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    console.log('\n\n APP componentWillReceiveProps: ', nextProps);
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/account');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }

  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.resetBid();
    this.props.resetClientSDs();
    this.props.logout();
  };

  render() {
    console.log('\n\nApps PROPS in render: ', this.props);
    const { user } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#33e0ff' }}>
                <div className={styles.brand} />
                <span>Turk System</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

           <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to="/systemdemands">
                <NavItem>System Demands</NavItem>
              </LinkContainer>

              <LinkContainer to="/clients">
                <NavItem>Clients</NavItem>
              </LinkContainer>

              <LinkContainer to="/developers">
                <NavItem>Developers</NavItem>
              </LinkContainer>

              {!user && (
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              )}

              {user && (
                <LinkContainer to="/logout">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    {' '}
                    Logout{' '}
                  </NavItem>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/account">
                  <NavItem>Account</NavItem>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>

        {/*
        <div className="well text-center">
          FOOTER
        </div>
        */}


      </div>
    );
  }
}
