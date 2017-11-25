import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AccountPage } from 'components';
import { fetchBidByEmail, fetchClientSDs } from '../../actions/SystemDemand/actions';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(this.props.auth.isLoaded){
      this.props.actions.fetchBidByEmail(this.props.auth.user.email);
      this.props.actions.fetchClientSDs(this.props.auth.user.email);
    }
  }

  render() {
    return (
      <div className="account">
        <Helmet title="Account" />
        {this.props.auth.isLoaded && this.props.bid.isLoaded && this.props.systemdemands.isLoaded? 
          (<AccountPage auth={this.props.auth} bid={this.props.bid} systemdemands={this.props.systemdemands} />) : (<span>Loading . . . </span>)
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchBidByEmail, fetchClientSDs}, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  bid: state.bid,
  systemdemands: state.systemdemands
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
