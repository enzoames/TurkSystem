import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JobDescription } from 'components'

class JobPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log(this.props.params)
    //this.props.actions.fetchSystemDemand(this.props.params.id);
  }

  render() {
      let jobProps;
      let data = [
        {"projectTitle": "Grubhub",
         "description": "Make food come to you more easily",
         "deadline": "Dec 12, 2018",
         "reward": "$1337",
         "id": 0},

        {"projectTitle": "CCNY",
         "description": "College with leaky ceilings",
         "deadline": "January 14, 2020",
         "reward": "$100000000",
         "id": 1},

        {"projectTitle": "Flora",
         "description": "Online flower shop",
         "deadline": "April 13th, 2019",
         "reward": "$8008",
         "id": 2},
         ];

    console.log("The jobID is: " + this.props.params.jobID)
    let row = data[this.props.params.jobID]
    console.log(data[this.props.params.jobID])

    return (
      <div className="jobpage">
        <JobDescription projectTitle={row.projectTitle} description={row.description} deadline={row.deadline} reward={row.reward} user={this.props.user} id={this.props.params.jobID}/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobPage
);
