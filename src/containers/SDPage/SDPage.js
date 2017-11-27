import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SDProfile } from 'components';
import { fetchSingleSD, fetchBidBySDID } from '../../actions/SystemDemand/actions';
import { postBid } from '../../actions/Bid/actions';

class SDPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.actions.fetchSingleSD(this.props.params.sdid);
    this.props.actions.fetchBidBySDID(this.props.params.sdid);
  }

  render() {
    console.log(" === SD PAGE PROPS", this.props);
    return (
      <div className="container sd-page">
        {this.props.systemdemand.isLoaded && this.props.bid.isLoaded ? 
          (<SDProfile systemdemand={this.props.systemdemand} bid={this.props.bid} user={this.props.user} {...this.props} />) : (<div>Loading . . .</div>)
        }
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchSingleSD, fetchBidBySDID, postBid}, dispatch)
});

const mapStateToProps = (state) => ({
  systemdemand: state.systemdemand,
  bid: state.bid,
  user: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(SDPage)
