
import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';
import { Bid } from 'components';

export default class BidsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {bids} = this.props;
    console.log('Bids: ', bids);
    let bid_list = bids.map(things => <Bid dev={things.dev} sysdemand={things.sysdemand} amount={things.amount}/>);
    return (
        <div className='bids-list'>
          {bid_list}
        </div>
    );
  }
}
