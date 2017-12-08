import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DeleteUser extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('\n\n DELETEUSER componentWillReceiveProps: ', nextProps);
    if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleDelete = (e, credential, id) => {
    event.preventDefault();
    this.props.resetBid();
    this.props.resetClientSDs();
    this.props.resetSelectedBid();
    const result = {
      credential: credential,
      id: id
    }
    this.props.deleteUser(result);
  };


  render() {
    const { auth } = this.props;

    return (
      <div className="client col-sm-12 col-md-12 col-lg-12">
        <div className="col-md-12 col-lg-12">
          <h1 className="bg-danger text-center">DELETE ACCOUNT</h1>
          <h4 className="text-danger">This action is irreversable</h4>
          <button onClick={ (e) => this.handleDelete(e, auth.user.credential, auth.user.id) }><span className="text-danger">DELETE MY ACCOUNT</span></button>
        </div>
      </div>
    );
  }
}

