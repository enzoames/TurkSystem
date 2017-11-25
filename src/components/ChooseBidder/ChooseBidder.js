import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class ChooseBidder extends Component {
  constructor(props) {
    super(props);
    this.state={
      developersChosen: ""
    }
  }

  componentDidMount(){
    const bidList = this.props.bid.bidList;
    console.log("LOADED", this.props.bid.isLoaded);
    let arrayOfDevelopers = [];
    bidList.map( (bid) => arrayOfDevelopers.push({devID: bid.developer.id, devName: bid.developer.name, sdID: bid.systemdemand.id, chosen: false}) );
    this.setState({developersChosen: arrayOfDevelopers});
  }

  handleSelectBid = (e, devID, devName, sdID ) =>{
    console.log("SELECTED")
  }

  render() {
    const {bid, systemdemands} = this.props; 
    console.log("\n ChooseBidder STATE: ", this.state);
    console.log("\n ChooseBidder PROPS: ", this.props);
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
            <h4>{sd.title}: <span className="text-muted">click on a name to select</span></h4>
            {bidsForCurrentSD}
          </div>
        )
      })
      return (result)
    }


    return (
      <div className="choose-bidder">
        <div className="col-md-12 col-lg-12">

        </div>

        <div className="col-md-12 col-lg-12">
          <h1 className="bg-primary text-center">Choose a bidder for your System Demands</h1>
          {RenderBidForEachSD()}
        </div>

      </div>
    );
  }
}



