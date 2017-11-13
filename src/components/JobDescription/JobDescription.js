import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class JobDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, projectTitle, description, reward, deadline, user} = this.props;
      //Status: {}(posted, delivered, timed-out, ongoing, canceled ? ),
    return (
      <div>
        <h1>{projectTitle}</h1>
        <p>Job ID: {id}</p>
        <hr/>
        Poster:{}
        <hr/>
        Description: {description}
        <hr/>
        Full Description: {}
        <hr/>
        Time Posted: {}
        <hr/>
        Deadline: {description}
        <hr/>
        Bids: {}
        <hr/>
        Reward: {reward}
        <hr/>
        Final Price: {},
        <hr/>
        Status: {},
        <hr/>
        Rating: {}
      </div>
    );
  }
}
