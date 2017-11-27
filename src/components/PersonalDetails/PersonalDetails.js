import React, { Component } from 'react';
import { RenderInput, RenderSubmitButton, RenderTextBox } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: "",
      technicalSkills: "",
      projectExperience: "",
      interests: "",
      recentWork: "", //Developer
      businessCredential: "", //Client

      errorObject: '',
      pageFields: '',
      NullErrorContainer: ''
    };
  }

  componentWillMount() {
    const tempPageFields = {
      resume: ['required'],
      technicalSkills: ['required'],
      projectExperience: ['required'],
      interests: ['required'],
      recentWork: ['required'], //Developer
      businessCredential: ['required'] //Client
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
        //projectTitle: this.state.projectTitle,
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
    // console.log('PersonalDetails STATE: ', this.state);
    //console.log('PersonalDetails PROPS: ', this.props);

    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    return (
      <div className="personal-details">
        <div className="col-md-12">
          <h1 className="bg-primary text-center">Personal Details</h1>
          <span>personal details page here!</span>
        </div>
      </div>
    );
  }
}




