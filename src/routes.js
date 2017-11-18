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
  TurkUser,

  JobPage,
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
       <Route path="systemdemands" component={SystemDemands} />
       <Route path="systemdemands/details/:id" component={JobPage} />

       <Route path="clients" component={Clients} />
       <Route path="clients/profile/:id" component={TurkUser} />
       
       <Route path="developers" component={Developers} />
       <Route path="developers/profile/:id" component={TurkUser} />
       

       <Route path="bids" component={BidsPage} />
       <Route path="bids/:SDID" component={BidsPage} />
       

       <Route path="register" component={Register} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};





