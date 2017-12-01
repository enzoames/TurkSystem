import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';
import { Developer } from 'components';

export default class DeveloperList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {developers} = this.props;
    const renderDeveloperList= developers.isLoaded ?
      developers.developerList.map( (developer) => <Developer id={developer.id} name={developer.name} lastname={developer.lastname}  rating={developer.rating}/>) : (<div>loading</div>);

    return (
      <div className="developer-list">
        <h3>Click to view personal details for each of our active developers</h3>
        {renderDeveloperList}
      </div>
    );
  }
}
