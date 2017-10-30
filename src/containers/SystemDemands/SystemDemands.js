import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SystemDemands extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="systemdemands">SystemDemands Page</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SystemDemands);
