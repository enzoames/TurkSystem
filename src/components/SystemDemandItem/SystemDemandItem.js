import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class SystemDemandItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS IN SystemDemandItem", this.props);
    const {id, projectTitle, description, status, deadline, client, user} = this.props;

    return (
      <div className="col-sm-12 col-md-6 col-lg-6 system-demand-item ">
        <div className="panel panel-default">

          <div className="panel-heading">
            <div className="panel-title text-center">{projectTitle}</div>
          </div>

          <div className="panel-body">
            <Link to={`clients/profile/${client.id}`}>
              <h4>{client.name} {client.lastname}</h4>
            </Link>
            <span className="text-center">Description</span>
            <span>{description}</span>
          </div>

          <ul className="list-group">
            <li className="list-group-item">Deadline: {deadline}</li>
            <li className="list-group-item">Status: {status}</li>
          </ul>

          <div className="panel-footer text-primary">
          
          <Link to={`systemdemands/jobpage/${id}/`}>
            {user.user? (user.user.credential === "developer" ? "Click To Bid" : "Click To View As User" ) : ("Click To View As Visitor") }
          </Link>
          
          </div>
        </div>

      </div>
    );
  }
}
