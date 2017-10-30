import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('\nAccountPage PROPS: ', this.props);
    return <div className="accountpage">Account page</div>;
  }
}
