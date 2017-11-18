import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';
import { Client } from 'components';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {clients} = this.props;
    const renderClientList = clients.isLoaded ? 
      clients.clientList.map( (client) => <Client id={client.id} name={client.name} lastname={client.lastname}  rating={client.rating}/>) : (<div>loading</div>);

    return (
      <div className="client-list">
        <h3>Click to view personal details for each of our active clients</h3>
        {renderClientList}
      </div>
    );
  }
}
