import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ChosenBids extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedBids } = this.props;

    const renderSelectedJobsInProgress = () => {
      const jobList = selectedBids.selectedList;
      const result = jobList.map( (item) => {
        let panel = '';
        if (!item.is_completed){
          panel = <div className="col-md-6 panel panel-default">
            <h4 className="text-primary text-center"><Link to={`systemdemands/details/${item.sysdemand.id}/`}>{item.sysdemand.title}</Link></h4>
            <div><strong>Is being worked by </strong><Link to={`/developers/profile/${item.developer.id}`}>{item.developer.name} {item.developer.lastname}</Link></div> 
            <div><strong>front money: </strong> ${item.front_fee} <span className="text-muted">front money is half of the total money promised</span></div>
            <div className="text-warning">Status: Work in progress </div>
          </div>;
        }
        return(panel)
      })

      return (result);
    }

    return (
      <div className="choose-bidder">
        <div className="col-md-12 col-lg-12">
          <h1 className="bg-primary text-center">Current System Demands in Progress</h1>
            {renderSelectedJobsInProgress()}
        </div>
      </div>
    );
  }
}
