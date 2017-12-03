import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class BidForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: {target: 1, value: ''}, 
      isBidded: false,
      errorObject: '',
      pageFields: '',
      NullErrorContainer: '',
      alreadyBidded: false
    };
  }
  
  componentWillMount() {
    const bidList = this.props.bid.bidList;
    let didBidFlag = false;
    const tempPageFields = { bid: ['minInteger', 'required'] };
    const errorContainer = {};
    Object.keys(tempPageFields).forEach(key => {
      errorContainer[key] = { error: null };
    });

    for (let i=0; i< bidList.length; i++){
      if(bidList[i].developer.email === this.props.userEmail)
        didBidFlag = true;
    }

    this.setState({ errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer, alreadyBidded: didBidFlag });
  }

  handleChange = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
    this.setState({ bid: {target: 1, value: event.target.value} });
  }

  handleSubmit = () => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const result = {
        bid: this.state.bid.value,
        sdID: this.props.sdID,
        email: this.props.userEmail
      };
      this.setState({isBidded: true})
      this.props.postBid(result)
      console.log('RESULT', result);
    }
  }

  checkValidation = (pageFields, stateFields) => {
    // match against current fields (current formpage fields) and all current states and only check for the current Fields.
    const formFields = {};
    Object.keys(pageFields).forEach( (fieldName) => (formFields[fieldName] = { rule: pageFields[fieldName], value: stateFields[fieldName], error: '' }));
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

    return (
      <div className="bidform">
      {this.props.sdStatus === 'Open' ?
        (<div>
        {!this.state.alreadyBidded ?
          (<div>
            {this.state.isBidded ? (<h4 className="text-success">Your bid has been completed, it will show in the system in a few moments</h4>):
              (<div>
                <RenderInput label="Bid Amount $" value={this.state.bid.value} name="bid" placeholder="" error={this.state.errorObject.bid.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
                <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Bid" />
              </div>)
            }  
          </div>) : (<h4>You already bidded for this system demand</h4>)
        }
        </div>) : (<h4 className="text-danger">System Demand is closed, can not bid</h4>)
      }
      </div>
    );
  }
}



