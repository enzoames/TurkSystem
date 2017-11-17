import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class Bid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS IN Bid", this.props);
    const {dev, sysdemand, amount} = this.props
    return (
      <div className="bid col-md-4">
        <div className="panel panel-default">

          <div className="panel-heading">
            <div className="panel-title text-center">{sysdemand.projectTitle}</div>
          </div>
          <div className="panel-body">
            Amount: { amount }
          </div>

          <ul className="list-group">
            <li className="list-group-item">Developer: { dev.name }</li>
            <li className="list-group-item">
              <Link className='text-primary' to={`users/${dev.id}`}>
                Click to view profile
              </Link>
            </li>
            <li className="list-group-item">
              <Link className='text-primary' to={`systemdemand/${sysdemand.id}`}>
                Click to view system demand
              </Link>
            </li>
          </ul>

          <div className="panel-footer">
            Rating: {dev.rating}
          </div>
        </div>
      </div>
    );
  }
}
