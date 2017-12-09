import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AccountPage } from 'components';
import { fetchBidByEmail, fetchClientSDs, postSystemDemand } from '../../actions/SystemDemand/actions';
import { fetchSelectedBids, submitChosenDeveloper, fetchSDResults, postRateDeveloper } from '../../actions/Clients/actions';
import { updateUserProfile, depositMoney, messageSuperUser, deleteUser, resetBid, resetClientSDs, resetSelectedBid } from '../../actions/Auth/actions';
import { postSDResult, postRateClient } from '../../actions/Developers/actions';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(this.props.auth.isLoaded){ //THIS ACTION RUN EVERY TIME THE COMPONENT IS MOUNTED, IF NOT LOADED RUN THE ACTION ELSE IT HAS BEEN LOADED
      if (this.props.auth.user.credential !== 'superuser'){
        this.props.actions.fetchBidByEmail(this.props.auth.user.email);
        this.props.actions.fetchSelectedBids(this.props.auth.user.email, this.props.auth.user.credential);
        if (this.props.auth.user.credential === 'client'){
          this.props.actions.fetchClientSDs(this.props.auth.user.email);
          //this.props.actions.fetchSDResults(this.props.auth.user.email);
        }
      }
    }
  }

  render() {
    const renderAccount = (auth) => {
      if (auth.isLoaded && auth.isLogedIn){
        const credential = auth.user.credential;
        switch (credential) {
          case 'client':
            if(this.props.bid.isLoaded && this.props.clientSDs.isLoaded && this.props.selectedBids.isLoaded){
              console.log(" \n\n==== CLIENT DID LOG IN");
              return(<AccountPage auth={this.props.auth} bid={this.props.bid} systemdemands={this.props.clientSDs} {...this.props} />);
            }
            else
              return(<span>Loading . . . </span>);
          case 'developer':
            if(this.props.bid.isLoaded && this.props.selectedBids.isLoaded){
              console.log(" \n\n==== DEVELOPER DID LOG IN");
              return(<AccountPage auth={this.props.auth} bid={this.props.bid} systemdemands={this.props.clientSDs} {...this.props} />)
            }
            else
              return(<span>Loading . . . </span>);
          case 'superuser':
            console.log(" \n\n==== SUPERUSER LOG IN");
            return(<AccountPage auth={this.props.auth} bid={this.props.bid} systemdemands={this.props.clientSDs} {...this.props}/>)
          default:
            return(<span>Loading . . . </span>);
        }
      }
      else
        return (<span>Loading . . . </span>);
    }

    return (
      <div className="account">
        <Helmet title="Account" />
          {renderAccount(this.props.auth)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchBidByEmail, fetchClientSDs, updateUserProfile, submitChosenDeveloper, fetchSelectedBids, depositMoney, postSystemDemand, fetchSDResults, postSDResult, postRateDeveloper, messageSuperUser, deleteUser, resetBid, resetClientSDs, resetSelectedBid, postRateClient }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  bid: state.bid,
  clientSDs: state.clientSDs,
  selectedBids: state.selectedBids
  //sdresults: state.sdresults
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
