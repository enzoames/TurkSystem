import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DeveloperBids extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {auth, bid} = this.props;

    const renderOpenBids = () => {
      const bids = this.props.bid.bidList;
      const openBids = bids.map( (bid) => <div className="col-md-4 panel panel-default">
          <h4 className="text-center">{bid.systemdemand.title}</h4>
          <h4>Reward: ${bid.systemdemand.reward}</h4>
          <h4>Bidding Price: ${bid.price}</h4>
          <h4>System Demand status: {bid.systemdemand.status}</h4>
        </div>)

      return(
        <div className="col-md-12">
          <h4>Open Bids</h4>
            {openBids}
        </div>
      )
    }

    return (
      <div className="developer-bids">
        <div className="col-md-12 col-lg-12">
            <h1 className="bg-primary text-center">Developer Option</h1>

            {auth.user.accepted ? 
              (<div>
                <h4><Link to="/systemdemands">Click Here!</Link> to view all our System Demands and start bidding!</h4>
              </div>) : (<h4>Account must be accepted before bidding</h4>)
            }

        </div>   

        {auth.user.accepted && renderOpenBids()}
      
      </div>
    );
  }
}
