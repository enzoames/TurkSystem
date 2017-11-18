import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SystemDemandList } from 'components';
import { fetchSDList } from '../../actions/SystemDemand/actions';

class SystemDemands extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(!this.props.systemdemands.isLoaded){
      this.props.actions.fetchSDList();
    }
  }

  render() {
    let demands = [];
    if (this.props.params.UID === undefined) {
      demands = SYSDEMANDS;
    }
    else {
      for (var i = 0; i < SYSDEMANDS.length; i++) {
        if (SYSDEMANDS[i].posterID == this.props.params.UID) {
          demands.push(SYSDEMANDS[i]);
        }
      }
    }

    return (
      <div className="systemdemands container">
        <h1 className="text-center">
          <u>System Demands</u>
        </h1>
        <SystemDemandList systemdemands={this.props.systemdemands} user={this.props.auth}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchSDList }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  systemdemands: state.systemdemands
});

export default connect(mapStateToProps, mapDispatchToProps)(SystemDemands);
