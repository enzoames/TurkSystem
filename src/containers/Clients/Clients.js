import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ClientList } from 'components'
import { fetchClients } from '../../actions/Clients/actions';

class Clients extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(!this.props.clients.isLoaded){
      this.props.actions.fetchClients();
    }
  }

  render() {
    return (
      <div className="container clients">
        <h1 className="text-center"><u>Clients</u></h1>

        <ClientList clients={this.props.clients}/>
      
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchClients}, dispatch)
});

const mapStateToProps = (state) => ({
  clients: state.clients
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
