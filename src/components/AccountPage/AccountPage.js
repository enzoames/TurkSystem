import React, { Component } from 'react';
import { PostSystemDemand, MoneyDeposit, PersonalDetails, ChooseBidder, 
  ChosenBids, DeveloperBids, RateSDResult, BidResult } from 'components';
import { hasValue } from '../../utils/utilfunctions';
import { Link } from 'react-router';

export default class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { auth, bid, systemdemands } = this.props;
    console.log(" === PROPS IN ACCOUNT PAGE", this.props);
    const user = auth.isLoaded ? auth.user : null;
    const renderNotAcceptedMessage = <h4>Your account must be accepted before any options are available</h4>;

    return (
      <div className="accountpage">
        {hasValue(user) &&
        <div>
          {user.credential === "superuser" &&
            (<h1 className="bg-primary text-center">SUPERUSER ACCOUNT</h1>)
          }
          {user.credential === "client" &&
            (<h1 className="bg-primary text-center">Client Account: {user.name} {user.lastname}</h1>)
          }
          {user.credential === "developer" &&
            (<h1 className="bg-primary text-center">Developer Account: {user.name} {user.lastname}</h1>)
          }

          <div className="container">

            <div className="col-md-12 col-lg-12">
              <h3><u>Message from Administrator</u></h3>
              <blockquote className="blockquote">
                <h4>{hasValue(user.message) ? (user.message): ("No messages")}  </h4>
              </blockquote>
            </div>

            <div className="col-md-12 col-lg-12">
              <h3><u>Status</u></h3>
              <blockquote className="blockquote">
                {user.pending && <h4 className="text-danger">Account is pending approval</h4>}
                {user.accepted && <h4 className="text-primary">Accepted</h4>}
              </blockquote>
            </div>

            <div className="col-md-12 col-lg-12">
              <h3><u>Rating</u></h3>
              <blockquote className="blockquote">
                <h4>Current Rating: {user.rating}</h4>
              </blockquote>
            </div>

            <div className="col-md-12 col-lg-12">
              <h3><u>Warnings</u></h3>
              <blockquote className="blockquote">
                {user.warning > 0 ? (<h4>Account warnings: user.warning_count</h4>) : (<h4>No warnings on account</h4>)}
              </blockquote>
            </div>

            {user.credential !== 'superuser' &&
              <PersonalDetails auth={this.props.auth} {...this.props.actions} />
            }

            <div className="col-md-12 col-lg-12">
              <h1 className="bg-primary text-center">Deposit Money</h1>
              <h4>Current Balance: ${user.money}</h4>
              {user.pending ? (<h4>Account must be accepted before depositing money</h4>) :
                (<MoneyDeposit auth={this.props.auth} {...this.props.actions} />)
              }
            </div>

            {user.credential === "developer" &&
              <div>
                <DeveloperBids auth={auth} bid={bid}/>
                <ChosenBids auth={auth} selectedBids={this.props.selectedBids}/>
                <BidResult {...this.props.actions} />
              </div>
            }

            {user.credential === "client" &&
              <div>
                <div className="col-md-12 col-lg-12">
                  <h1 className="bg-primary text-center">Client Option</h1>
                  {user.accepted ? (<PostSystemDemand auth={this.props.auth} {...this.props.actions} />) : (renderNotAcceptedMessage)}
                </div>
                <ChooseBidder bid={bid} systemdemands={systemdemands} {...this.props.actions} />
                <ChosenBids auth={auth} selectedBids={this.props.selectedBids}/>     
                <RateSDResult result={this.props.sdresults} />
              </div>
            }

          </div>
        </div>
        }

      </div>
    );
  }
}
