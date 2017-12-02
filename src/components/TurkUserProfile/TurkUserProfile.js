import React, { Component } from 'react';
//import {ResponsiveEmbed} from 'react-bootstrap';
import { Link } from 'react-router';

import avatar from '../../avatar.png';

export default class TurkUserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { turkuser } = this.props;

    const renderTemplate = () => {
      const user = turkuser.details;
      return(
        <div>
          <div className="col-md-3">

          <div style={{width: 500, height: 'auto'}}>
            <embed src={avatar} />
          </div>
          
          <h4 className="text-center">{user.name} {user.lastname}</h4>

            <span><strong>Rating:</strong> {user.rating}</span>
          </div>

          <div className="col-md-9">
            <div>Detail description goes here</div>
            <div>list active system demands for client</div>
            <div>list active bids for developer</div>
          </div>

          <div className="col-md-12">
            <div>list what sd is dev working on, list what sd are currently has devs working on for client</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-center">Profile</h1>
        { turkuser.isLoaded ? renderTemplate() : <div>Loading . . .</div> }
      </div>
    );
  }
}
