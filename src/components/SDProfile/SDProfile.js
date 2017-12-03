import React, { Component } from 'react';
import { Link } from 'react-router';
import { BidItem, BidForm } from 'components';

export default class SDProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {systemdemand, bid, user} = this.props;
    const sd = systemdemand.sd;
    const client = systemdemand.sd.client;
    const bidList = bid.bidList

    const BidList = () => {
      const result = bidList.length > 0 ? 
        (bidList.map( (bid) => <BidItem sd={bid.systemdemand.title} dev={bid.developer.name + " " + bid.developer.lastname} devID={bid.developer.id} devRating={bid.developer.rating} bidAmount={bid.price} bidCreated={bid.bid_created} isChosen={bid.is_chosen} />)) 
        : (<h1 className="text-danger">No Bids Yet</h1>);
      return result;
    }

    return (
      <div className="sd-profile">

        <div className="jumbotron">
          <h1 className="text-center">{sd.title}</h1>
          <span className={"text-center " + (sd.status === "Open" ? "text-success" : "text-danger") }><strong>Status: {sd.status}</strong></span> 
        </div>

        <div className="col-md-12 panel panel-default">
          
          <div className="col-md-12 panel panel-default">
            <span className="center-block glyphicon glyphicon-menu-right"></span>
            <h4>Pre-condition</h4>
            <span>{sd.precondition}</span>
          </div>

          <div className="col-md-12 panel panel-default">
            <span className="center-block glyphicon glyphicon-menu-right"></span>
            <h4>Post-Condition</h4>
            <span>{sd.postcondition}</span>
          </div>
          
          <div className="col-md-12 panel panel-default">
            <span className="center-block glyphicon glyphicon-menu-right"></span>
            <h4>Description</h4>
            <span>{sd.description}</span>
          </div>
          
          <div className="col-md-6 panel panel-default">
            <span className="center-block glyphicon glyphicon-menu-right"></span>
            <h4>Reward</h4>
            <span>${sd.reward}</span>
          </div>

          <div className="col-md-6 panel panel-default">
            <span className="center-block glyphicon glyphicon-menu-right"></span>
            <h4>Deadline</h4>
            <span>{sd.deadline}</span>
          </div>

        </div>

        <div className="col-md-8">
          <h4 className="text-center"><u>Current Open Bids</u></h4>
          {BidList()}
        </div>
        
        {this.props.user.user ? 
          (user.user.credential === "developer" ? 
            (<div className="col-md-4">
              <h4 className="text-center"><u>Place a Bid for {sd.title}</u></h4>
              <BidForm sdID={sd.id} sdStatus={sd.status} userEmail={user.user.email} bid={this.props.bid} {...this.props.actions} />
            </div>):(<span></span>) ) : (<h4>Want to start bidding please <Link to="/register">Register Now</Link></h4>)
        }
        
        <div className="col-md-12 bg-faded">
          <h3>This System Demand has been posted by <Link to={`/clients/profile/${client.id}`}>{client.name} {client.lastname}</Link> with a rating of {client.rating}</h3>
          <h4><Link to="/clients/">Click here to learn more about all our clients!</Link></h4>
        </div>
        
      </div>
    );
  }
}
