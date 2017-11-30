import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DeveloperList } from 'components'
import { fetchDevelopers } from '../../actions/Developers/actions';

class Developers extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(!this.props.developers.isLoaded){
      this.props.actions.fetchDevelopers();
    }
  }

  render() {
    return (
      <div className="container developers">
        <h1 className="text-center"><u>Developers</u></h1>

        <DeveloperList developers={this.props.developers}/>
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({fetchDevelopers}, dispatch)
});

const mapStateToProps = state => ({
  developers: state.developers
});

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
