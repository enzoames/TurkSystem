import React, { Component } from 'react';
import { RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { hasValue } from '../../utils/utilfunctions';
import { Link } from 'react-router';

export default class ChooseBidder extends Component {
  constructor(props) {
    super(props);
    this.state={
      developersChosen: "",
      isThereError: false,
      didSubmit: false
    }
  }

  componentDidMount(){
    const bidList = this.props.bid.bidList;
    let arrayOfDevelopers = [];
    bidList.map( (bid) => arrayOfDevelopers.push({devID: bid.developer.id, devName: bid.developer.name, sdID: bid.systemdemand.id, sdName: bid.systemdemand.title, bidPrice: bid.price, chosen: false}) );
    this.setState({developersChosen: arrayOfDevelopers});
  }

  // componentDidUpdate(prevProps, prevState){
  //   prevState.developersChosen
  // }

  handleSelectBid = (e, devID, devName, sdID) => {
    let devChosen = this.state.developersChosen;
    devChosen.forEach( (item) => {
      if(item.sdID == sdID)
        item.chosen = false;
    })

    devChosen.forEach( (item) => {
      if(item.devID === devID && item.sdID === sdID){
        if (item.chosen)
          item.chosen = false;
        else
          item.chosen = true;
      }
    })
    this.setState({developersChosen: devChosen});
  }

  handleDeSelectBid = (e, devID, devName, sdID) => {
    let devChosen = this.state.developersChosen;
    devChosen.forEach( (item) => {
      if(item.devID === devID && item.sdID === sdID){
        if (item.chosen)
          item.chosen = false;
      }
    })
    this.setState({developersChosen: devChosen});
  }


  handleSubmit = () => {
    let isThereErrorFlag = false;
    let devChosen = this.state.developersChosen;
    devChosen.forEach( (item) => {
      if(item.chosen == true)
        isThereErrorFlag = true;
    })
    if(isThereErrorFlag){
      //this.props.actions.submitChosenDeveloper
      console.log("SUCCESS", this.state.developersChosen);
      this.setState({didSubmit: true, isThereError: false});
    }
    else{
      this.setState({isThereError: true});
    }

  }


  render() {
    const {bid, systemdemands} = this.props;
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const bidList = bid.bidList;
    const sdList = systemdemands.sdList;

    const RenderBidForEachSD = () => {
      const result = sdList.map( (sd) => {
        const currentSD = sd.id;
        const bidsForCurrentSD = bidList.map( (bid) => {
          let currentBids = '';
          if (bid.systemdemand.id === currentSD){
            currentBids =
              <div className="panel panel-default" onClick={ (e)=> this.handleSelectBid(e, bid.developer.id, bid.developer.name, currentSD)}>
                <div><span>{bid.developer.name} ${bid.price}</span></div>
              </div>;
          }
          return(currentBids)
        })
        return(
          <div className="col-md-4 panel panel-default">
            <h4>{sd.title}: <span className="text-muted">click name to select</span></h4>
            {bidsForCurrentSD}
          </div>
        )
      })
      return (result)
    }

    const renderSelectedDevelopers = () => {
      const selectedDevelopers = this.state.developersChosen;
      //console.log(" ==== selectedDevelopers", selectedDevelopers);
      const result = selectedDevelopers.map( (dev) => {
        let currentDev = '';
        if(dev.chosen)
          currentDev = <div className="col-md-12" onClick={ (e)=> this.handleDeSelectBid(e, dev.devID, dev.devName, dev.sdID)}><h4 className="text-primary">{dev.sdName}: currently slected => {dev.devName} for ${dev.bidPrice}</h4></div>;
        return(currentDev)
      })
      return (result)
    }

    return (
      <div className="choose-bidder">
        <div className="col-md-12 col-lg-12">
          <h1 className="bg-primary text-center">Choose a bidder for your System Demands</h1>
          {RenderBidForEachSD()}
        </div>

        <div>
          <div className="col-md-12 col-lg-12">
            <h3>Your current selected Developers</h3>
            {hasValue(this.state.developersChosen) && renderSelectedDevelopers() }
          </div>

          {this.state.didSubmit ? (<h4 className="text-success">Submition Success</h4>)
            : (<RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Submit" />)
          }
          {this.state.isThereError && <span className="text-danger">Must choose at least one developer</span> }
        </div>

      </div>

    );
  }
}
