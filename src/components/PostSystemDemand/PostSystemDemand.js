import React, { Component } from 'react';
import { RenderInput, RenderSubmitButton, RenderTextBox } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class PostSystemDemand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: '',
      projectTitle: '',
      desciption: '',
      precondition: '',
      postcondition: '',
      reward: '',
      deadline: '',
      errorObject: '',
      pageFields: '',
      NullErrorContainer: '',
      isPosted: false
    };
  }

  componentWillMount() {
    const tempPageFields = {
      projectTitle: ['required'],
      desciption: ['required'],
      precondition: ['required'],
      postcondition: ['required'],
      reward: ['required'],
      deadline: ['required']
    };
    const errorContainer = {};
    Object.keys(tempPageFields).forEach(key => {
      errorContainer[key] = { error: null };
    });
    const currentMoney = this.props.auth.user.money;
    this.setState({ errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer, currentBalance: currentMoney });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const balanceError = this.checkBalance(this.state.currentBalance, this.state.reward);
      if (!balanceError){
        const result = {
          title: this.state.projectTitle,
          description: this.state.desciption,
          precondition: this.state.precondition,
          postcondition: this.state.postcondition,
          reward: this.state.reward,
          client: this.props.auth.user.email,
          deadline: this.state.deadline
        };
        console.log('RESULT', result);
        this.props.postSystemDemand(result);
        console.log('\n\nSuccess!!!');
        this.setState({isPosted: true});
      }
      else{
        console.log("NOT ENOUGH MONEY ERROR", this.state);
        let errorObj = this.state.errorObject;
        errorObj.reward.error = "Not enough money in account! please deposit money to your account before posting a system demand";
        this.setState({errorObject: errorObj});
      }

    }  
  }

  checkBalance = (currentBalance, reward) => {
    const isThereError = currentBalance - reward >= 0 ? false : true;
    return isThereError;
  }

  checkValidation = (pageFields, stateFields) => {
    const formFields = {};
    Object.keys(pageFields).forEach(fieldName => (formFields[fieldName] = { rule: pageFields[fieldName], value: stateFields[fieldName], error: '' }));
    return createValidatorNew(formFields); // return the array with error, value, and field validation rule
  }

  checkErrorInValidation = (fields) => {
    if (fields.errorCount === 0) {
      return false;
    }
    this.setState({ errorObject: fields.state }); 
    return true;
  }

  render() {
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    return (
      <div className="postsystemdemand">
        <h1 className="text-center">Post System Demand</h1>

        {!this.state.isPosted ? 
        (<div>
          <RenderInput label="Project Title *" value={this.state.projectTitle} name="projectTitle" placeholder="" error={this.state.errorObject.projectTitle.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
          <RenderTextBox label="Desciption *" value={this.state.desciption} name="desciption" placeholder="detailed description about the system" rows={3} error={this.state.errorObject.desciption.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
          <RenderTextBox label="Precondition *" value={this.state.precondition} name="precondition" placeholder="" rows={3} error={this.state.errorObject.precondition.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
          <RenderTextBox label="Postcondition *" value={this.state.postcondition} name="postcondition" placeholder="" rows={3} error={this.state.errorObject.postcondition.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
          <RenderInput label="Reward $" value={this.state.reward} name="reward" placeholder="" error={this.state.errorObject.reward.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
          <RenderInput label="Deadline Date: YYYY-MM-DD HH:MM:00 *" value={this.state.deadline} name="deadline" placeholder="" error={this.state.errorObject.deadline.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
          <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Post" />
        </div>) : (<h4 className="text-success">Thank you, for posting a System Demand to the platform. Changes will be reflected upon upon next login</h4>)
        }

      </div>
    );
  }
}




