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
        This is the job description page
      </div>
    );
  }
}
