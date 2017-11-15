import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DevelopersList } from 'components'
import { USERS } from '../../DummyData'

class Developers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="developers container">
        <h1 className="text-center">
          <u>Developers</u>
        </h1>
        <DevelopersList developers={USERS.developers}/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
