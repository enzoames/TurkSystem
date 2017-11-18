import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HomePage, LoginForm } from 'components';
import { login } from '../../actions/Auth/actions';

import { SYSDEMANDS, USERS, BIDS} from '../../DummyData'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  get_top_clients() {
    let clients = USERS.clients.slice();
    clients.sort(function(a, b){return b.rating-a.rating});
    return clients.slice(0, 2);
  }

  get_top_devs() {
    let developers = USERS.developers.slice();
    developers.sort(function(a, b){return b.rating-a.rating});
    return developers.slice(0, 2);
  }

  render() {
    const { auth } = this.props
    const styles = require('./Home.scss');

    let top_clients = this.get_top_clients();
    let top_developers = this.get_top_devs();

    return (
      <div className={styles.home}>
        <Helmet title="Home" />

        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
          <HomePage top_clients={top_clients} top_developers={top_developers}/>
        </div>

        {!auth.user &&
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <LoginForm auth={this.props.auth} {...this.props.actions} />
        </div>
        }

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ login }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
