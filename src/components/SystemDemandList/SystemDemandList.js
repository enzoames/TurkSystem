import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';
import { SystemDemandItem } from 'components';

export default class SystemDemandList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, systemdemands } = this.props;
    const renderSDList = systemdemands.isLoaded ?
      (systemdemands.sdList.map( (demand) => <SystemDemandItem projectTitle={demand.title} description={demand.description} deadline={demand.deadline} reward={demand.reward} status={demand.status} client={demand.client} user={user} id={demand.id}/> ) ):(<div>loading</div>);

    const visitorMessage = <h3>You are viewing this page as a visitor, please register to view all options as a client or developer on any of the following System Demands</h3>
    const userMessage = <h3>These are all the System Demands available in our platform. Feel free to navigate through the client and developer profiles and enjoy our platform</h3>
    return (
      <div className="system-demand-list">
        {user.user ? (userMessage) : (visitorMessage) }
        {renderSDList}
      </div>      
    );
  }
}


