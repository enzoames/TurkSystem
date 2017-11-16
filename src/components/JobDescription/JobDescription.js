import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class JobDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, projectTitle, description, reward, deadline, user, postTime, rating, status, poster} = this.props;
      //Status: {}(posted, delivered, timed-out, ongoing, canceled ? ),
    return (
      <div>
        <h1>{projectTitle}</h1>
        {user.credential == "developer" ?
          :
          <Link to='#'>
            <button class="btn btn-default btn-md " data-reactid="50">Bid</button>
          </Link>
        }
        <p>Job ID: {id}</p>
        <hr/>
        Poster:{poster}
        <hr/>
        Description: {description}
        <hr/>
        Full Description: {}
        <hr/>
        Time Posted: {postTime}
        <hr/>
        Deadline: {description}
        <hr/>
        Bids: {}
        <hr/>
        Reward: {reward}
        <hr/>
        Final Price: {}
        <hr/>
        Status: {status}
      </div>
    );
  }
}
