import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BidsList } from 'components'
import { SYSDEMANDS, USERS, BIDS} from '../../DummyData'

class BidsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log(this.props.params)
  }

  get_bids_by_dev(devid) {
    let bids = []
    for (var i = 0; i < BIDS.length; i++) {
      if (devid == BIDS[i].bidderID) {
        bids.push(this.get_ith_bid(i));
      }
    }
    return bids;
  }

  get_bids_by_sysdemand(sysdemand) {
    let bids = []
    for (var i = 0; i < BIDS.length; i++) {
      if (sysdemand == BIDS[i].sysDemandID) {
        bids.push(this.get_ith_bid(i));
      }
    }
    return bids;
  }
  get_all_bids(){
    let bids = []
    for (var i = 0; i < BIDS.length; i++) {
      bids.push(this.get_ith_bid(i));
    }
    return bids;
  }

  get_ith_bid(i) {
    let devid = BIDS[i].bidderID;
    let amount = BIDS[i].bidAmount;
    let sysDemandID = BIDS[i].sysDemandID;
    let dev;
    let sysdemand;
    for (var j = 0; j < USERS.developers.length; j++) {
      if (USERS.developers[j].id == devid) {
        dev = USERS.developers[j];
      }
    }

    for (var j = 0; j < SYSDEMANDS.length; j++) {
      if (SYSDEMANDS[j].id == sysDemandID) {
        sysdemand = SYSDEMANDS[j];
      }
    }
    return {'dev': dev, 'sysdemand': sysdemand, 'amount': amount};
  }

  render() {
    let bids=[];
    console.log('BidsPage: ');
    if (this.props.params.SDID === undefined && this.props.params.UID === undefined) {
      console.log("Getting All Bids");
      bids = get_all_bids();
    }
    else if (this.props.params.SDID !== undefined){
      console.log("Getting Bids By SystemDemand");
      bids = this.get_bids_by_sysdemand(this.props.params.SDID);
    }
    else if (this.props.params.UID !== undefined){
      console.log("Getting Bids By Developer");
      bids = this.get_bids_by_dev(this.props.params.UID);
    }
    else {
      console.log("Something Went Wrong");
    }

    return (
      <div className='bids-list container'>
        <h1 className="text-center">
          <u>Bids</u>
        </h1>
        <BidsList bids={bids}/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BidsPage
);
