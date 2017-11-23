import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SDProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {systemdemand, bid} = this.props;
    console.log("PROPS IN SDProfile:", this.props);
    const sd = systemdemand.sd;
    const client = systemdemand.sd.client;

    return (
      <div className="sd-profile">

        <div className="jumbotron">
          <h1 className="text-center">{sd.title}</h1>
          <span className="text-center text-danger"><strong>Status: {sd.status}</strong></span>
        </div>

        <div className="col-md-12">
          <span className="center-block glyphicon glyphicon-menu-right"></span>
          <div className="col-md-12">
            <h4 className="lead">Pre-condition</h4>
            <span>{sd.precondition}</span>
          </div>

          <span className="center-block glyphicon glyphicon-menu-right"></span>
          <div className="col-md-12">
            <h4 className="lead">Post-Condition</h4>
            <span>{sd.postcondition}</span>
          </div>
          
          <span className="center-block glyphicon glyphicon-menu-right"></span>
          <div className="col-md-12">
            <h4 className="lead">Description</h4>
            <span>{sd.description}</span>
          </div>
          
          <span className="center-block glyphicon glyphicon-menu-right"></span>
          <div className="col-md-6">
            <h4 className="lead">Reward</h4>
            <span>{sd.reward}</span>
          </div>

          <span className="center-block glyphicon glyphicon-menu-right"></span>
          <div className="col-md-6">
            <h4 className="lead">Deadline</h4>
            <span>{sd.deadline}</span>
          </div>
          
          <span className="center-block glyphicon glyphicon-menu-right"></span>
          <div className="col-md-12">
            <h4 className="lead">Current Bid</h4>
          </div>

        </div>

        <div className="col-md-8">
          <h4 className="text-center"><u>Current Open Bids</u></h4>

        </div>
        
        <div className="col-md-4">
          <h4 className="text-center"><u>Place a Bid for {sd.title}</u></h4>
        </div>

        <div className="col-md-12 bg-faded">
          <h3>This System demand has been posted by <Link to={`/clients/profile/${client.id}`}>{client.name} {client.lastname}</Link> with a rating of {client.rating}</h3>
          <h4><Link to="/clients/">Click here to learn more about all our clients!</Link></h4>
        </div>

      </div>
    );
  }
}
