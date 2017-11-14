import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';
import { Client } from 'components';

export default class ClientsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    const renderList = () => {
      /*
      let sdList;
      let data = [
        {"projectTitle": "Grubhub",
         "description": "Make food come to you more easily",
         "deadline": "Dec 12, 2018",
         "reward": "$1337",
         "id": 0},

        {"projectTitle": "CCNY",
         "description": "College with leaky ceilings",
         "deadline": "January 14, 2020",
         "reward": "$100000000",
         "id": 1},

        {"projectTitle": "Flora",
         "description": "Online flower shop",
         "deadline": "April 13th, 2019",
         "reward": "$8008",
         "id": 2},
         ];

      sdList = data.map(things => <Client projectTitle={things.projectTitle} description={things.description} deadline={things.deadline} reward={things.reward} user={user} id={things.id}/>);
      */
      return (
        <div className="clients-list">
          <Client/>
        </div>
      );
    }

    return (
        <div>
          {renderList()}
        </div>
    );
  }
}
