import React, { Component } from 'react';
import { Link } from 'react-router';
import { ClientsList, DevelopersList } from 'components'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {top_clients, top_developers} = this.props;

    return (
      <div className="homepage">
        <h1><u>Top Clients</u></h1>
        <ClientsList clients={top_clients}/>

        <hr/>

        <h1><u>Top Developers</u></h1>
        <DevelopersList developers={top_developers}/>
      </div>
    );
  }
}
