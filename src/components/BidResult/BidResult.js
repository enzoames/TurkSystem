import React, { Component } from 'react';
import { RenderSubmitButton, RenderInputm, RenderTextBox } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { hasValue } from '../../utils/utilfunctions';
import { Link } from 'react-router';

export default class BidResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdFlag: "",
      result: "",
      errorObject: "",
      pageFields: "",
      NullErrorContainer: ""
    }
  }

  componentDidMount(){
    const joblist = this.props.selectedBids.selectedList;
    let tempSdFlag = [];
    joblist.map( (item) => tempSdFlag.push({sdid: item.sysdemand.id, sdTitle: item.sysdemand.title, open: false}) );
    const tempPageFields = {
      result: ['required'],
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

  handleToggleForm = (e, sdID) =>{
    let currentFlags = this.state.sdFlag;
    currentFlags.map( (item) => item["open"] = item.sdid === sdID ? true : false );
    this.setState({sdFlag: currentFlags, result: "", errorObject: this.state.NullErrorContainer})
  }

  handleSubmit = (e, sdID) => {
    const fields = this.checkValidation(this.state.pageFields, this.state);
    const isThereError = this.checkErrorInValidation(fields);
    if (!isThereError) {
      const data = {
        "result": this.state.result,
        "sdID": sdID,
        "devID": this.props.auth.user.id
      }
      console.log("DATA", data); 
      this.props.postSDResult(data)
      this.setState({errorObject: this.state.NullErrorContainer, result: ""})
    }
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
    const { selectedBids } = this.props;
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    const renderResultFormForEachSD = () => {
      const jobList = selectedBids.selectedList;
      const result = jobList.map( (item) => {
        const sdFlags = this.state.sdFlag;
        const currentStatus = sdFlags.filter( (sd) => sd.sdid === item.sysdemand.id );
        const formField = <div>
          {!item.is_completed &&
          <div className="col-md-12 panel panel-default">
            <h4 className="text-center text-primary" onClick={ (e) => this.handleToggleForm(e, item.sysdemand.id)}>{item.sysdemand.title}</h4>
            <div>
              {currentStatus[0].open &&
              <div>
                <div className="text-danger"><strong>Deadline:</strong> {item.sysdemand.deadline}</div>
                <RenderTextBox label="Result *" value={this.state.result} name="result" placeholder="detailed result for this system demand" rows={3} error={this.state.errorObject.result.error} onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
                <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={ (e)=>this.handleSubmit(e, item.sysdemand.id)} label="Submit" />
              </div>
              }
            </div>
          </div>
          }
        </div>;

        return(formField);
      })

      return(result)
    }

    return (
      <div className="bid-result">

        <div className="col-md-12 col-lg-12">
          <h1 className="bg-primary text-center">Post your results for each System Demand here</h1>
          
          {this.state.sdFlag.length > 0 ?
            (<div>
              <h4><strong>If available - </strong> Click on one of the following System Demands and submit your result within the given deadline</h4>
              <h4 className="text-danger"> Please click the submit only once</h4>
              {renderResultFormForEachSD()}
            </div>):(<h4>No open System Demands available</h4>)
          }

        </div>

      </div>
    );
  }
}
