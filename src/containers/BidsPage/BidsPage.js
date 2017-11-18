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

  render() {
    let bids=[];
    console.log("PROPS in BidsPage:", this.props);
    if (this.props.params.SDID == undefined) {
      for (var i = 0; i < BIDS.length; i++) {
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

        bids.push({'dev': dev, 'sysdemand': sysdemand, 'amount': amount})
      }
    }
    else {
      let i = this.props.params.SDID
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

      bids.push({'dev': dev, 'sysdemand': sysdemand, 'amount': amount})
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
