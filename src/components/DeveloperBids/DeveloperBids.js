import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DeveloperBids extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {auth, bid} = this.props;
    console.log("DEVELOPER BIDS PROPS", this.props);

    const renderOpenBids = () => {
      

      return(
        <div className="col-md-12">
          <h4>Open Bids</h4>

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
