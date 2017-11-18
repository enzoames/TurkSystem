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
    console.log("\n\n SYSTEMDEMAND LIST PROPS: ", this.props);

    const renderSDList = systemdemands.isLoaded ?
      (systemdemands.sdList.map( (demand) => <SystemDemandItem projectTitle={demand.title} description={demand.description} deadline={demand.deadline} status={demand.status} client={demand.client} user={user} id={demand.id}/> ) ):(<div>loading</div>);

    return (
      <div className="system-demand-list">
        {renderSDList}
      </div>      
    );
  }
}


