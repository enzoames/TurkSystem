import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class JobDescription extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        Poster
        <hr/>
        Detailed description
        <hr/>
        time posted,
        <hr/>
        deadline,
        <hr/>
        bids,
        <hr/>
        starting price,
        <hr/>
        final price,
        <hr/>
        basic description,
        <hr/>
        owner,
        <hr/>
        status (posted, delivered, timed-out, ongoing, canceled ? ),
        <hr/>
        dev rating
      </div>
    );
  }
}
