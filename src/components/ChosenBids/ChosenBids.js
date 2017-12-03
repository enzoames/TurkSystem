import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ChosenBids extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("PROPS in ChosenBids:", this.props)
    const { selectedBids } = this.props;

    const RenderSelectedBidForEachSD = () => {
      if (selectedBids.isLoaded){
        let selectedList = selectedBids.selectedList;
        const result = selectedList.map( (bid) => {
          return(
            <div className="col-md-4 panel panel-default">
              <h4>system demand information here</h4>
              {/*<h4>{bid.sdName}: {bid.devName}, ${bid.bidAmount}</h4>*/}
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
          <h1 className="bg-primary text-center">Current System Demands in Progress</h1>
            {RenderSelectedBidForEachSD()}
        </div>
      </div>
    );
  }
}
