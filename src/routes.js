import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import getRoutesUtils from 'utils/routes';
import { App, Home, NotFound, Register, Clients, Developers, SystemDemands, Account } from 'containers';

// eslint-disable-next-line import/no-dynamic-require
if (typeof System.import === 'undefined') System.import = module => Promise.resolve(require(module));

export default store => {
  const { injectReducerAndRender, permissionsComponent } = getRoutesUtils(store);

  /* Permissions */

  const isAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated'
  });

  const isNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    predicate: user => !user,
    failureRedirectPath: '/',
    allowRedirectBack: false
  });

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* ============ Routes requiring login ============ */}
      {/*
          You can also protect a route like this:
          <Route path="protected-route" {...permissionsComponent(isAuthenticated)(Component)}>
        */}
      <Route {...permissionsComponent(isAuthenticated)()}>
        <Route path="account" component={Account} />
      </Route>
      {/* ================================================ */}

      {/* ============ Routes Don't login ============ */}
      {/* These routes show if and only if you are not logged in */}
      <Route {...permissionsComponent(isNotAuthenticated)()}>
        <Route path="register" component={Register} />
        <Route path="clients" component={Clients} />
        <Route path="developers" component={Developers} />
        <Route path="systemdemands" component={SystemDemands} />
      </Route>
      {/* ================================================ */}

      {/* ============ Routes ============ */}
      {/* Routes show on both authenticated and not authenticated */}
      {/* <Route path="login" component={Login} /> */}
      {/* ================================ */}

      {/* ============ Catch all route ============ */}
      <Route path="*" component={NotFound} status={404} />
      {/* ================================ */}
    </Route>
  );
};

// sample route
//      <Route
//        path="survey"
//        getComponent={() =>
//          injectReducerAndRender(
//            { survey: System.import('./redux/modules/survey') },
//            System.import('./containers/Survey/Survey')
//          )}
//      />
//      <Route
//        path="widgets"
//        getComponent={() =>
//          injectReducerAndRender(
//            { widgets: System.import('./redux/modules/widgets') },
//            System.import('./containers/Widgets/Widgets')
//          )}
//      />

//        <Route
//          path="chatFeathers"
//          getComponent={() =>
//            injectReducerAndRender(
//              { chat: System.import('./redux/modules/chat') },
//              System.import('./containers/ChatFeathers/ChatFeathers')
//            )}
//        />
