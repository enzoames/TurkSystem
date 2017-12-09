import React, { Component } from 'react';
import { Link } from 'react-router';
import { RenderInputNumber, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';

export default class ViewEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdFlag: "",
      rateClient: "",
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
      rateClient: ['required']
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

  handleSubmit = (e, sdID, clientEmail) => {
    const nulls = this.state.NullErrorContainer;    
    const fields = this.checkValidation(this.state.pageFields, this.state);
    let isThereError = true;
    isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const result = {
        client_rating: parseInt(this.state.rateClient),
        sdID: sdID,
        client: clientEmail
      };
      console.log('RESULT', result);
      this.props.postRateClient(result);
      console.log('\n\nSuccess!!!');
      this.setState({errorObject: nulls , rateClient: ""})
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
      let isThereRateError = this.checkRate(fields.state.rateClient.value)
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
    console.log(" ==== VIEW EVALUATION: ", this.props);
    const { selectedBids } = this.props;
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    const renderRateClientViewMessages = () => {
      const jobList = selectedBids.selectedList;
      const result = jobList.map( (item) => { 
        const sdFlags = this.state.sdFlag;
        const currentStatus = sdFlags.filter( (sd) => sd.sdid === item.sysdemand.id );
        const resultbox = <div>
          {item.client_note !== null &&
            <div>
            {item.is_completed &&
              <div className="col-md-6 panel panel-default">
                <div className="col-md-12" onClick={ (e) => this.handleToggleForm(e, item.sysdemand.id)}>
                  <h4>{item.sysdemand.title} | View your rating given by client {item.sysdemand.client.name + " " + item.sysdemand.client.lastname}</h4>
                </div>

                {currentStatus[0].open &&
                <div>
                  <div className="col-md-12">
                    <h4><u>Rating: {item.system_rating}</u></h4>
                    <div className="panel panel-default">
                      <span>Message from client: {item.client_note}</span>
                    </div>
                    <RenderInputNumber label="Rate Client 1 - 5" value={this.state.rateClient} name="rateClient" min={"1"} max={"5"} placeholder={""} error={this.state.errorObject.rateClient.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} inputGroupClassName={inputGroupClassName} />
                    <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={(e) => this.handleSubmit(e, item.sysdemand.id, item.sysdemand.client.email)} label="Submit" />
                  </div>

                  {item.system_rating <= 3 && 
                    <h4 className="text-danger">Don't like your rating? email client directly - {item.sysdemand.client.email} or message super user for any other complaints</h4>
                  }

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
      <div className="view-evaluation-result">
        <div className="col-md-12 col-lg-12">
          <h1 className="bg-primary text-center">Rate your Client and view evaluation</h1>
          <h4><strong>If any results avialable</strong><span className="text-danger"> Please click the submit button only once </span>. On your next log in, your account will update</h4>
          {renderRateClientViewMessages()}
        </div>

      </div>
    );
  }
}
