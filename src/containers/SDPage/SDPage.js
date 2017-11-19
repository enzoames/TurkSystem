import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SDProfile } from 'components';
import { fetchSignleSD } from '../../actions/SystemDemand/actions';

class SDPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    //this.props.actions.fetchSignleSD(this.props.params.id);
  }

  render() {
    return (
      <div className="container jobpage ">
        <SDProfile systemdemand={this.props.systemdemand}/>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchSignleSD}, dispatch)
});

const mapStateToProps = (state) => ({
  systemdemand: state.systemdemand
});

export default connect(mapStateToProps, mapDispatchToProps)(SDPage)
