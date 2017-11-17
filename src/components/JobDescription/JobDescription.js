import React, { Component } from 'react';
import {FormControl, FormGroup, InputGroup, Button} from 'react-bootstrap';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class JobDescription extends Component {
  constructor(props) {
    super(props);
    this.bidAmount = 0;
  }

  render() {
    const {id, projectTitle, description, currentBid, deadline, user, postTime, rating, status, poster} = this.props;
    console.log(this.props);
      //Status: {}(posted, delivered, timed-out, ongoing, canceled ? ),
      /*
        {user.credential == "developer" ?
          :
        }
        */
    return (
      <div className="job-description">
        <hr/>
        Posted By: {poster}
        <hr/>
        Brief Description: {description}
        <hr/>
        Full Description: {}
        <hr/>
        Time Posted: {postTime}
        <hr/>
        Deadline: {description}
        <hr/>
        Current Bid: {currentBid}
        <hr/>
        Status: {status}
        <hr/>

        <Link to={`/bids/${id}`}>
          View Bids
        </Link>

        {status === "closed" && <p>Final Price: {currentBid}</p>}
        {status === "open" &&
          <div className="col-sm-3 text-center">
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" placeholder="0.00"/>
                <InputGroup.Button>
                  <Button>Submit Bid</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </div>}
      </div>
    );
  }
}
