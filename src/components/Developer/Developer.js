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
    console.log('got to devloper')

    return (
      <div className="developer col-md-4">
        <div className="panel panel-default">

          <div className="panel-heading">
            <div className="panel-title">Developer Name</div>
          </div>

          <div className="panel-body">
            <p>Client Bio</p>
          </div>

          <ul className="list-group">
            <li className="list-group-item">Member Since: {}</li>
            <li className="list-group-item">Bids</li>
          </ul>

          <div className="panel-footer text-primary">
            <Link to={`systemdemands`}>
              Click to view profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
