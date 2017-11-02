import React, { Component } from 'react';
import { RenderInput, RenderSubmitButton, RenderTextBox } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class PostSystemDemand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: '',
      desciption: '',
      precondition: '',
      postcondition: '',
      reward: '',
      errorObject: '',
      pageFields: '',
      NullErrorContainer: ''
    };
  }

  componentWillMount() {
    const tempPageFields = {
      projectTitle: ['required'],
      desciption: ['required'],
      precondition: ['required'],
      postcondition: ['required'],
      reward: ['required']
    };
    const errorContainer = {};
    Object.keys(tempPageFields).forEach(key => {
      errorContainer[key] = { error: null };
    });
    this.setState({ errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer });
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const result = {
        projectTitle: this.state.projectTitle,
        desciption: this.state.desciption,
        precondition: this.state.precondition,
        postcondition: this.state.postcondition,
        reward: this.state.reward,
        email: this.props.user.email
      };
      console.log('RESULT', result);
      //this.props.login(result);
      console.log('\n\nSuccess!!!');
    }
  }

  checkValidation = (pageFields, stateFields) => {
    // match against current fields (current formpage fields) and all current states and only check for the current Fields.
    const formFields = {};
    Object.keys(pageFields).forEach(fieldName => (formFields[fieldName] = { rule: pageFields[fieldName], value: stateFields[fieldName], error: '' }));
    return createValidatorNew(formFields); // return the array with error, value, and field validation rule
  }

  checkErrorInValidation = (fields) => {
    if (fields.errorCount === 0) {
      return false;
    }
    this.setState({ errorObject: fields.state }); // altering the errorObj is what triggers the error mssgs on fields.
    return true;
  }

  render() {
    // console.log('LoginForm STATE: ', this.state);
    // console.log('LoginForm PROPS: ', this.props);

    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    return (
      <div className="container postsystemdemand">
        <h1 className="text-center">Post System Demand</h1>
        <RenderInput label="projectTitle" value={this.state.projectTitle} name="projectTitle" placeholder="" error={this.state.errorObject.projectTitle.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
        <RenderTextBox label="Desciption" value={this.state.desciption} name="desciption" placeholder="detailed description about the system" rows={5} error={this.state.errorObject.desciption.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        <RenderTextBox label="Precondition" value={this.state.precondition} name="precondition" placeholder="" rows={10} error={this.state.errorObject.precondition.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        <RenderTextBox label="Postcondition" value={this.state.postcondition} name="postcondition" placeholder="" rows={10} error={this.state.errorObject.postcondition.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        <RenderInput label="Reward" value={this.state.reward} name="reward" placeholder="" error={this.state.errorObject.reward.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
        <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Post" />
      </div>
    );
  }
}




