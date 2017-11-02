import React, { Component } from 'react';
import { Link } from 'react-router';
import { RenderInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { PostSystemDemand, MoneyDeposit } from 'components';
import { hasValue } from '../../utils/utilfunctions';

export default  class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { auth } = this.props;
    console.log("\n ACCOUNT PROPS: ", this.props);
    const user = auth.user;
    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';
    const renderNotAcceptedMessage = <div className="panel panel-default"><h4>Your account must be accepted before any options are available</h4></div>;

    return (

      <div className="accountpage">
        <h1 className="text-center">Account</h1>
        <div className="container">
          
          <h3><u>Message from Administrator</u></h3>
          <div className="col-md-12 col-lg-12">
            <blockquote className="blockquote">
              <h4>{hasValue(user.message) && user.message} </h4>
            </blockquote>
          </div>


          <h3><u>Status</u></h3>
          <div className="col-md-12 col-lg-12">
            <blockquote className="blockquote">
              {user.pending && <h4>Account is pending approval</h4>}
              {user.accepted && <h4>Accepted</h4>}
              {user.warning > 0 && <h4>Account warnings: user.warning_count</h4>}
            </blockquote>
          </div>
          

          <h3><u>Rating</u></h3>
          <div className="col-md-12 col-lg-12">
            <blockquote className="blockquote">
              <h4>Current Rating: {user.rating}</h4>
            </blockquote>
          </div>


          <h3><u>Warnings</u></h3>
          <div className="col-md-12 col-lg-12">
            <blockquote className="blockquote">
              {user.warning > 0 && <h4>Account warnings: user.warning_count</h4>}
            </blockquote>
          </div>


          <h3><u>Personal Details</u></h3>
          
          <h3><u>Current Balance / Deposit Money</u></h3>
          <div className="col-md-12 col-lg-12">
            <blockquote className="blockquote">
              {user.pending ? (<h4>Account must be accepted before depositing money</h4>) : 
                (
                  <MoneyDeposit auth={this.props.auth} />
                )
              }
            </blockquote>
          </div>

          {user.credential === "developer" &&
            <div>
              <h3><u>Developer Option:</u></h3>
              {user.accepted ? 
                (<div>
                  <h4>Current Balance: {user.money}</h4>
                  <Link to="/systemdemands">
                    <RenderSubmitButton outerGroupClassName="col-md-3 col-lg-3" buttonClassName="" onClick="" label="Start Bidding" />
                  </Link>
                </div>) : (renderNotAcceptedMessage)
              }
            </div> 
          }

          {user.credential === "client" &&  
            <div>
              <h3><u>Client Option:</u></h3>
                {user.accepted ? (<PostSystemDemand auth={user} />) : (renderNotAcceptedMessage)}
            </div>
          }

        </div>

      </div>
    );
  }
}
