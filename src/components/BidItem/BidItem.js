import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BidItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {sd, dev, devID, devRating, bidAmount, bidCreated, isChosen} = this.props;

    return (
      <div className="bid col-md-4">
        <div className="panel panel-default">

          <div className="panel-heading">
            <Link to={`/developers/profile/${devID}`}>
              <h4 className="panel-title text-center">{dev}</h4>
            </Link>
          </div>

          <div className="panel-body">
            <h4 className="text-center">{sd}</h4>
            <h4>Bid Amount: ${bidAmount}</h4>
            {isChosen ? (<h4 className="text-success">Chosen!</h4>) : (<h4 className="text-danger">Not Chosen</h4>) }
          </div>

          <ul className="list-group">
            <li className="list-group-item">
              <span>Posted On: {bidCreated}</span>
            </li>
          </ul>

          <div className="panel-footer">
            <h4>Developer Rating: {devRating}</h4>
          </div>

        </div>
      </div>
    );
  }
}
