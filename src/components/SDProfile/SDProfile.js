import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SDProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {systemdemand} = this.props;
    
    return (
      <div className="sd-profile">
        <div className="col-md-12">
          <h4>Posted By: </h4>
          <hr/>
          <h4>Pre-condition</h4>
          <hr/>
          <h4>Post-Condition</h4>
          <hr/>
          <h4>Description</h4>
          <hr/>
          <h4>Deadline</h4>
          <hr/>
          <h4>Current Bid: </h4>
          <hr/>
          <h4>Status</h4>
          <hr/>
        </div>

        <div className="col-md-8">
          RENDER HERE ALL BIDS ASSOCIATED WITH THIS SYSTEM DEMAND
        </div>
        
        <div className="col-md-4">
          RENDER FORM HERE TO PLACE A BID TO THIS SYSTEM (COMPONENT)
        </div>

        <hr/>

        <div className="col-md-12">
          RENDER CLIENT INFORMATION?
        </div>

      </div>
    );
  }
}
