import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
import { load as loadAuth, logout } from 'actions/Auth/actions';
import {
  App,
  Home,
  NotFound,
  Register,
  Clients,
  Developers,
  SystemDemands,
  Account,
  JobPage,
  UserPage,
  BidsPage,
} from 'containers';

export default (store) => {
  function checkAuth(logged, replace, cb) {
    const { auth: { user } } = store.getState();
    if (!!user === !logged) replace('/');
    cb();
  }

  const requireLogin = (nextState, replace, cb) => {
    if (!isAuthLoaded(store.getState())) {
      //store.dispatch(loadAuth()).then(() => checkAuth(true, replace, cb));
    } else {
      checkAuth(true, replace, cb);
    }
  };

  const requireNotLogged = (nextState, replace, cb) => {
    if (!isAuthLoaded(store.getState())) {
      //store.dispatch(loadAuth()).then(() => checkAuth(false, replace, cb));
    } else {
      checkAuth(false, replace, cb);
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* Routes requiring login */}
      <Route onEnter={requireLogin}>
        <Route path="account" component={Account} />
      </Route>

      {/* Routes disallow login */}
      <Route onEnter={requireNotLogged}>
        {/* <Route path="register" component={Register} /> */}
      </Route>

      {/* Routes */}
       <Route path="clients" component={Clients} />
       <Route path="clients/:UID/systemdemands" component={SystemDemands} />
       <Route path="developers" component={Developers} />

       <Route path="developers/:UID/bids" component={BidsPage} />
       <Route path="bids" component={BidsPage} />
       <Route path="bids/:SDID" component={BidsPage} />

       <Route path="register" component={Register} />
       <Route path="systemdemands" component={SystemDemands} />
       <Route path="systemdemands/jobpage/:jobID" component={JobPage} />
       <Route path="users/:UID" component={UserPage} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};





