import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createValidatorNew } from '../../utils/validation';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../../components/RenderForm/RenderForm';
import { register } from '../../actions/Auth/actions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: {target: '', value: ''}, 
      errorObject: '',
      pageFields: '',
      NullErrorContainer: ''
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('\n\ncomponentWillReceiveProps REGISTER: ', nextProps);
    //if(nextProps.auth.user == null && nextProps.auth.isLoaded){
      if(nextProps.auth.error){
        this.setState({ errorObject: {password: {error: nextProps.auth.error.error}, email: {error: nextProps.auth.error.error} } })
      }
    //}
  } 

  componentWillMount() {
    const tempPageFields = {
      firstName: ['required'],
      lastName: ['required'],
      email: ['email', 'required'],
      password: ['required'],
      confirmPassword: ['required', 'match']
    };
    const errorContainer = {};
    Object.keys(tempPageFields).forEach(key => {
      errorContainer[key] = { error: null };
    });
    this.setState({ errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer });
  }


  handleChange = (event) => {
    if(event.target.getAttribute('name') == "confirmPassword"){
      this.setState({confirmPassword: {target: this.state.password, value: event.target.value } });
    }
    else {
      this.setState ({ [event.target.name]: event.target.value });
    }
  }

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const result = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };
      console.log('RESULT', result);
      this.props.actions.register(result);
      //console.log('\n\nSuccess!!!');
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
    console.log("REGISTER PROPS", this.props);
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    return (
      <div className="container register">
        <h1 className="text-center"><u>Register Page</u></h1>
          <div className="col-md-6 col-md-offset-3">
            <RenderInput label="Name *" value={this.state.firstName} name="firstName" error={this.state.errorObject.firstName.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
            <RenderInput label="Last Name *" value={this.state.lastName} name="lastName" error={this.state.errorObject.lastName.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
            <RenderInput label="Email *" value={this.state.email} name="email" placeholder="example@example.com" error={this.state.errorObject.email.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
            <RenderPasswordInput label="Password *" value={this.state.password} name="password" error={this.state.errorObject.password.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
            <RenderPasswordInput label="confirmPassword *" value={this.state.confirmPassword.value} name="confirmPassword" error={this.state.errorObject.confirmPassword.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
            <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Register" />
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ register }, dispatch)
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);











