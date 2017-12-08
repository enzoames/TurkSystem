import React, { Component } from 'react';
import { Link } from 'react-router';
import { RenderInputNumber, RenderSubmitButton, RenderTextBox } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';

export default class RateSDResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdFlag: "",
      rate: "",
      note: "",
      errorObject: "",
      pageFields: "",
      NullErrorContainer: ""
    }
  }

  componentWillMount() {
    const joblist = this.props.selectedBids.selectedList;
    let tempSdFlag = [];
    joblist.map( (item) => tempSdFlag.push({sdid: item.sysdemand.id, sdTitle: item.sysdemand.title, open: false}) );

    const tempPageFields = {
      rate: ['required'],
      note: ['required']
    };
    const errorContainer = {};
    Object.keys(tempPageFields).forEach(key => {
      errorContainer[key] = { error: null };
    });
    this.setState({ errorObject: errorContainer, pageFields: tempPageFields, NullErrorContainer: errorContainer, sdFlag: tempSdFlag });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (e, sdID) => {
    const nulls = this.state.NullErrorContainer;    
    const fields = this.checkValidation(this.state.pageFields, this.state);
    let isThereError = true;
    isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const result = {
        system_rating: parseInt(this.state.rate),
        client_note: this.state.note,
        sdID: sdID
      };
      console.log('RESULT', result);
      this.props.postRateDeveloper(result);
      console.log('\n\nSuccess!!!');
      this.setState({errorObject: nulls , rate: "", note:""})
    }  
  } 

  checkRate = (rate) => {
    let error = true;
    const newRate = parseInt(rate);
    if (newRate > 0 && newRate <=5){
      error = false;
    }
    return error;
  }
  
  checkValidation = (pageFields, stateFields) => {
    // match against current fields (current formpage fields) and all current states and only check for the current Fields.
    const formFields = {};
    Object.keys(pageFields).forEach(fieldName => (formFields[fieldName] = { rule: pageFields[fieldName], value: stateFields[fieldName], error: '' }));
    return createValidatorNew(formFields); // return the array with error, value, and field validation rule
  }

  checkErrorInValidation = (fields) => {
    let newFields = fields;
    if (fields.errorCount === 0) {
      let isThereRateError = this.checkRate(fields.state.rate.value)
      if(!isThereRateError){
        return false;
      }
      else{
        newFields.state.rate.error = "Rate must 1 or greater or less than or equal to 5";
        this.setState({errorObject: newFields.state})
        return true
      }
    }
    else{
      this.setState({ errorObject: fields.state }); // altering the errorObj is what triggers the error mssgs on fields.
      return true;
    }
  }

  handleToggleForm = (e, sdID) =>{
    let currentFlags = this.state.sdFlag;
    currentFlags.map( (item) => item["open"] = item.sdid === sdID ? true : false );
    const nulls = this.state.NullErrorContainer;
    this.setState({sdFlag: currentFlags, rate: "", errorObject: nulls})
  }

  render() {
    const { selectedBids } = this.props;
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    const renderEvaluateEachResult = () => {
      const jobList = selectedBids.selectedList;
      const result = jobList.map( (item) => { 
        const sdFlags = this.state.sdFlag;
        const currentStatus = sdFlags.filter( (sd) => sd.sdid === item.sysdemand.id );
        const resultbox = <div>
          {item.client_note === null &&
            <div>
            {item.is_completed &&
              <div className="col-md-6 panel panel-default">
                <div className="col-md-12" onClick={ (e) => this.handleToggleForm(e, item.sysdemand.id)}>
                  <h4>{item.sysdemand.title} completed by {item.developer.name + " " + item.developer.lastname} completed on {item.delivered_at}</h4>
                </div>

                {currentStatus[0].open &&
                <div className="col-md-12">
                  <h4>Result</h4>
                  <div className="panel panel-default">
                    <span>{item.result}</span>
                  </div>
                  <RenderInputNumber label="Rate developer's performace 1 - 5" value={this.state.rate} name="rate" min={"1"} max={"5"} placeholder={""} error={this.state.errorObject.rate.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
                  <RenderTextBox label="Evaluation Note *" value={this.state.note} name="note" placeholder="detailed evaluation note and explain why you chose this developer" rows={3} error={this.state.errorObject.note.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
                  <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={(e) => this.handleSubmit(e, item.sysdemand.id)} label="Submit" />
                </div>
                }
              </div>
            }
            </div>
          }
        </div>

        return(resultbox);
      })

      return(result);
    }

    return (
      <div className="rate-sd-result">
        <div className="col-md-12 col-lg-12">
          <h1 className="bg-primary text-center">Rate the results posted by your chosen Developers</h1>
          <h4><strong>If any results avialable</strong><span className="text-danger"> Please click the submit button only once </span>. On your next log in, your account will update</h4>
          {renderEvaluateEachResult()}
        </div>

      </div>
    );
  }
}
