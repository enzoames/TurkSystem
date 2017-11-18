import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TurkUserProfile } from 'components';
import { fetchSingleUser } from '../../actions/Auth/actions';

class TurkUser extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.actions.fetchSingleUser(this.props.params.id);
  }

  render() {
    return (
      <div className="container turkuser">
        <TurkUserProfile turkuser={this.props.turkuser}/>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchSingleUser}, dispatch)
});

const mapStateToProps = (state) => ({
  turkuser: state.turkuser
});

export default connect(mapStateToProps, mapDispatchToProps)(TurkUser);
