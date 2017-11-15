import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class Developer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS IN Client", this.props);
    const {name, bio, since, id, rating} = this.props

    return (
      <div className="developer col-md-4">
        <div className="panel panel-default">

          <div className="panel-heading">
            <div className="panel-title">{name}</div>
          </div>

          <div className="panel-body">
            <p>{bio}</p>
          </div>

          <ul className="list-group">
            <li className="list-group-item">Member Since: { since }</li>
            <li className="list-group-item">Rating: { rating }</li>
            <li className="list-group-item">
              <Link to={`developers/${id}/bids`}>
                View Bids
              </Link>
            </li>
          </ul>

          <div className="panel-footer text-primary">
            <Link to={`users/${id}`}>
              Click to view profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
