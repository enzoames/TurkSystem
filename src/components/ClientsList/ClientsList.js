import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';
import { Client } from 'components';

export default class ClientsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {clients, user} = this.props;
    const renderList = () => {
      let sdList;
      sdList = clients.map(things => <Client name={things.name} bio={things.bio} since={things.since} id={things.id} rating={things.rating}/>);
      return (
        <div className="clients-list">
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
