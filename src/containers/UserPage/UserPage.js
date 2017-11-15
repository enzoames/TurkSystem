import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserDisplay } from 'components'
import { USERS } from '../../DummyData'

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("The UserID is: " + this.props.params.UID)
    let row = USERS.developers.concat(USERS.clients)[this.props.params.UID]
    let sdList = (<UserDisplay name={row.name} bio={row.bio} since={row.since} id={row.id} rating={row.rating}/>);
    return (
      <div className="UserPage container">
        <h1 className="text-center">
          <u>Clients</u>
        </h1>
        { sdList }
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
