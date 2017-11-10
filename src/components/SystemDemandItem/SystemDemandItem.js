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
    const {projectTitle, description, reward, deadline, user} = this.props;

    return (
      <div className="system-demand-item col-md-4">
        <div className="panel panel-default">

          <div className="panel-heading">
            <div className="panel-title">{projectTitle}</div>
          </div>

          <div className="panel-body">
            <p>{description}</p>
          </div>

          <ul className="list-group">
            <li className="list-group-item">Deadline: {deadline}</li>
            <li className="list-group-item">Reward: {reward}</li>
          </ul>

          <div className="panel-footer text-primary">
          <Link to="systemdemands/jobpage">
              {user.user ?
                (user.user.credential === "developer" ?
                  "Click To Bid"
                  : "Click To View As User")
                : "Click To View As Visitor"
              }
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
