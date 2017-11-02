import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class MoneyDeposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: '',
      sentflag: false,
      errorObject: '',
      pageFields: '',
      NullErrorContainer: ''
    };
  }

  componentWillMount() {
    const tempPageFields = {
      money: ['required']
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
        'money': this.state.money
      };
      console.log('RESULT', result);
      //this.props.login(result);
      this.setState({sentflag: true})
      console.log('\n\nSuccess!!!');
    }
  }

  handleNewDeposit = () => {
    this.setState({sentflag: false, money: "", errorObject: this.state.NullErrorContainer});
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
          <h4>Your Money has been deposited. Changes to your account can take up to 24hrs, Thank you</h4>
          <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleNewDeposit} label="Make Another Deposit"/>
        </div>
      );
    }

    const renderDepositMoneyForm = () => {
      return (
        <div>
          <RenderInput label="Amount to Deposit $" value={this.state.money} name="money" placeholder="" error={this.state.errorObject.money.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
          <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Deposit" />
      </div>);
    }

    return (
      <div className="deposit">
        {this.state.sentflag ? renderSuccessMessage() : renderDepositMoneyForm() }
      </div>
    );
  }
}





