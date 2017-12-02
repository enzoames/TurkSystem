import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HomePage, LoginForm } from 'components';
import { login } from '../../actions/Auth/actions';
import { fetchDevelopers } from '../../actions/Developers/actions';
import { fetchClients } from '../../actions/Clients/actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(!this.props.developers.isLoaded){
      this.props.actions.fetchDevelopers();
    }
    if(!this.props.clients.isLoaded){
      this.props.actions.fetchClients();
    }
  }

  get_top_k(lst, k) {
    let cls= lst.slice();
    cls.sort(function(a, b){return b.rating-a.rating});
    return cls.slice(0, k);
  }

  render() {
    const { auth } = this.props;
    const styles = require('./Home.scss');

    console.log("PROPS in Home: ", this.props);

    let top_clients    = this.get_top_k(this.props.clients.clientList, 2);
    let top_developers = this.get_top_k(this.props.developers.developerList, 2);

    let top_client_dic = {
      clientList: top_clients,
      isLoaded: true};
    let top_dev_dic = {
      developerList: top_developers,
      isLoaded: true};

    return (
      <div className={styles.home}>
        <Helmet title="Home" />

        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
          <HomePage top_clients={top_client_dic} top_developers={top_dev_dic}/>
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ login, fetchDevelopers, fetchClients }, dispatch)
});

const mapStateToProps = state => ({
  auth: state.auth,
  developers: state.developers,
  clients: state.clients
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
