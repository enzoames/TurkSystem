import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ClientsList } from 'components'
import { USERS } from '../../DummyData'

class Clients extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="clients container">
        <h1 className="text-center">
          <u>Clients</u>
        </h1>
        <ClientsList clients={USERS.clients}/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
