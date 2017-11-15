import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SystemDemandList } from 'components'
import { SYSDEMANDS } from '../../DummyData'

class SystemDemands extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="systemdemands container">
        <h1 className="text-center">
          <u>System Demands</u>
        </h1>
        <SystemDemandList systemdemands={SYSDEMANDS} user={this.props.auth}/>
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
