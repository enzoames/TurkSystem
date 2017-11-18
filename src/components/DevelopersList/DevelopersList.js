import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';
import { Developer } from 'components';

export default class DevelopersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {developers, user} = this.props;
    const renderList = () => {
      let sdList;
      sdList = developers.map(things => <Developer name={things.name} bio={things.bio} since={things.since} id={things.id} rating={things.rating}/>);
      return (
        <div className="row developers-list">
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
