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
    if(!this.props.sysdemandList.loaded){
      this.props.actions.fetchSDList();
    }
  }

  render() {
    return (
      <div className="systemdemands">
      <SystemDemandList sysdemandList={this.props.sysdemandList} user={this.props.auth}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchSDList }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  sysdemandList: state.sysdemandList
});

export default connect(mapStateToProps, mapDispatchToProps)(SystemDemands);
