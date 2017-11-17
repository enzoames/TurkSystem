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
    let poster;
    for (var i = 0; i < USERS.clients.length; i++) {
      if (USERS.clients[i].id == row.posterID) {
        poster = USERS.clients[i].name;
      }
    }
    console.log(row)
    return ();
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobPage
);
