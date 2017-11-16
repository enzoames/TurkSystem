import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JobDescription } from 'components'
import { SYSDEMANDS } from '../../DummyData'

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
    return (
      <div className="jobpage container">
        <h1 className="text-center">
          <u>{row.projectTitle}</u>
        </h1>
        <JobDescription projectTitle={row.projectTitle} description={row.description} deadline={row.deadline}
                        reward={row.reward} user={this.props.user} id={this.props.params.jobID}
                        postTime={row.postTime} rating={row.rating} status={row.status} poster={row.poster}/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobPage
);
