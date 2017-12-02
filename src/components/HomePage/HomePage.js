import React, { Component } from 'react';
import { Link } from 'react-router';
import { ClientList, DeveloperList } from 'components';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {top_clients, top_developers} = this.props;
    return (
      <div className="homepage">
        
        <div className="col-md-12">
          <div className="well">
            <h2 className="text-center">Turk Platform</h2>
            <h4 className="text-center">This platform allows for clients to post professional programming jobs to be solved by developers</h4>
          </div>
        </div>

        <h1><u>Top Clients</u></h1>
        <ClientList clients={top_clients}/>

        <hr/>
        
        <h1><u>Top Developers</u></h1>
        <DeveloperList developers={top_developers}/>

      </div>
    );
  }
}
