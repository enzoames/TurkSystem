import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class SystemDemandItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, projectTitle, description, reward, status, deadline, client, user} = this.props;

    return (
      <div className="col-sm-12 col-md-6 col-lg-6 system-demand-item ">
        <div className="panel panel-default">

          <div className="panel-heading">
            <Link to={`systemdemands/details/${id}/`}>
            <h4 className="panel-title text-center">{projectTitle}</h4>
            </Link>
          </div>

          <div className="panel-body">
            <Link to={`clients/profile/${client.id}`}>
              <h4>{client.name} {client.lastname}</h4>
            </Link>
            <strong className="center-block text-center">Description</strong>
            <span>{description}</span>
          </div>

          <ul className="list-group">
            <li className="list-group-item"><strong>Reward:</strong>$ {reward}</li>
            <li className="list-group-item"><strong>Deadline:</strong> {deadline}</li>
            <li className="list-group-item"><strong>Status:</strong> {status}</li>
          </ul>

        </div>
      </div>
    );
  }
}
