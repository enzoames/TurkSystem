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
    const {systemdemands, user} = this.props;
    const renderList = () => {
      let sdList = systemdemands.map(things => <SystemDemandItem projectTitle={things.projectTitle} description={things.description} deadline={things.deadline} reward={things.reward} user={user} id={things.id}/>);
      return (
        <div className="system-demand-list">
          {sdList}
        </div>
      );
    }

    return (
        <div>
          {renderList()}
        </div>
    );
  }
}
