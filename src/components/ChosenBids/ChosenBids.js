
import React, { Component } from 'react';
import { RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { hasValue } from '../../utils/utilfunctions';
import { Link } from 'react-router';
import { fetchBidSelectionsByClient } from '../../actions/Clients/actions';

export default class ChosenBids extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS in ChosenBids:", this.props)
    const { selectedBids } = this.props;

    const RenderSelectedBidForEachSD = () => {
      if (selectedBids.isLoaded){
        let selectedBidsList = selectedBids.selectedBidsList;
        const result = selectedBidList.map( (bid) => {
          return(
            <div className="col-md-4 panel panel-default">
              <h4>{bid.sdName}: {bid.devName} {bid.bidAmount}</h4>
            </div>
          )
        })
        return (result);
      }
      else {
        return '';
      }
    }

    return (
      <div className="choose-bidder">
        <div className="col-md-12 col-lg-12">
          <h1 className="bg-primary text-center">Chosen Bids For Your System Demands</h1>
            {RenderSelectedBidForEachSD()}
        </div>
      </div>
    );
  }
}
