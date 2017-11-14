import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DevelopersList } from 'components'

class Developers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="developers">
        <DevelopersList/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
