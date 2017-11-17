import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JobDescription } from 'components'
import { SYSDEMANDS, USERS } from '../../DummyData'

class JobPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log(this.props.params)
    //this.props.actions.fetchSystemDemand(this.props.params.id);
  }

  render() {
    let row = SYSDEMANDS[this.props.params.jobID]
    console.log("THIIIS SHIIIIT");
    console.log(SYSDEMANDS);
    let poster;
    for (var i = 0; i < USERS.clients.length; i++) {
      if (USERS.clients[i].id == row.posterID) {
        poster = USERS.clients[i].name;
      }
    }
    return (
      <div className="jobpage container">
        <h1 className="text-center">
          <u>{row.projectTitle}</u>
        </h1>
        <JobDescription projectTitle={row.projectTitle} description={row.description} deadline={row.deadline}
                        currentBid={row.currentBid} user={this.props.user} id={this.props.params.jobID}
                        postTime={row.postTime} rating={row.rating} status={row.status} poster={poster}/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobPage
);
