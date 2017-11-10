import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SystemDemandList } from 'components'

class SystemDemands extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="systemdemands">
      <SystemDemandList user={this.props.auth}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(SystemDemands);
