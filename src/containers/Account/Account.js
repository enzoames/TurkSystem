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
      if (this.props.auth.user.credential !== 'superuser'){
        this.props.actions.fetchBidByEmail(this.props.auth.user.email);
        if (this.props.auth.user.credential === 'client'){
          this.props.actions.fetchClientSDs(this.props.auth.user.email);
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
            if(this.props.bid.isLoaded && this.props.clientSDs.isLoaded){
              console.log(" ==== CLIENT DID LOG IN");
              return(<AccountPage auth={this.props.auth} bid={this.props.bid} systemdemands={this.props.clientSDs} />);
            }
            else
              return(<span>Loading . . . </span>);
          case 'developer':
            if(this.props.bid.isLoaded){
              console.log(" ==== DEVELOPER DID LOG IN");
              return(<AccountPage auth={this.props.auth} bid={this.props.bid} systemdemands={this.props.clientSDs} />)
            }
            else
              return(<span>Loading . . . </span>);
          case 'superuser':
            console.log(" ==== SUPERUSER LOG IN");
            return(<AccountPage auth={this.props.auth} bid={this.props.bid} systemdemands={this.props.clientSDs} />)
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
  actions: bindActionCreators({fetchBidByEmail, fetchClientSDs}, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  bid: state.bid,
  clientSDs: state.clientSDs
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
