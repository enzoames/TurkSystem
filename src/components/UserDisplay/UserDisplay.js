import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class UserDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, bio, since, id, rating} = this.props
    return (
      <div>
          <h1>User Name: {name}</h1>
        <hr/>
          Bio: {bio}
        <hr/>
          Member Since: {since}
        <hr/>
          Rating: {rating}
      </div>
    );
  }
}
