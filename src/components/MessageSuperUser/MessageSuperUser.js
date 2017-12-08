import React, { Component } from 'react';
import { RenderTextBox, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class MessageSuperUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      sentflag: false,
      errorObject: '',
      pageFields: '',
      NullErrorContainer: ''
    };
  }

  componentWillMount() {
    const tempPageFields = {
      message: ['required']
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
        'user': this.props.auth.user.id,
        'message': this.state.message
      };
      console.log('RESULT', result);
      this.props.messageSuperUser(result);
      this.setState({sentflag: true})
      console.log('\n\nSuccess!!!');
    }
  }

  handleNewDeposit = () => {
    this.setState({sentflag: false, message: "", errorObject: this.state.NullErrorContainer});
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
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    const renderSuccessMessage = () => {
      return(
        <div>
          <h4>Your message has been sent, Thank you</h4>
          <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleNewDeposit} label="Send another message"/>
        </div>
      );
    }

    const renderMessageForm = () => {
      return (
        <div>
          <RenderTextBox label="Message *" value={this.state.message} name="message" placeholder="please provide a detailed description" rows={3} error={this.state.errorObject.message.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>          
          <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Send" />
        </div>
      );
    }

    return (
      <div className="message-to-su">
        <div className="col-md-12">
          <h1 className="bg-primary text-center">Message the administrator</h1>
          <h4>Please message the super user regarding any disagreements, disputes, etc</h4> 
          {this.state.sentflag ? renderSuccessMessage() : renderMessageForm() }
        </div>
      </div>
    );
  }
}















