import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from '../../redux/modules/constants';

import cookie from 'js-cookie';

// =========================================
// ============== LOAD ACTION ==============
// =========================================

function setCookie({ app }) {
  return async response => {
    const payload = await app.passport.verifyJWT(response.accessToken);
    const options = payload.exp ? { expires: new Date(payload.exp * 1000) } : undefined;

    cookie.set('feathers-jwt', response.accessToken, options);
  };
}

function setToken({ client, app, restApp }) {
  return response => {
    const { accessToken } = response;

    app.set('accessToken', accessToken);
    restApp.set('accessToken', accessToken);
    client.setJwtToken(accessToken);
  };
}

function setUser({ app, restApp }) {
  return response => {
    app.set('user', response.user);
    restApp.set('user', response.user);
  };
}

export function load() {
  return {
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
    promise: async ({ app, restApp, client }) => {
      const response = await restApp.authenticate();
      await setCookie({ app })(response);
      setToken({ client, app, restApp })(response);
      setUser({ app, restApp })(response);
      return response;
    }
  };
}

// =============================================
// ============== REGISTER ACTION ==============
// =============================================

export function register(body) {
  return {
    // body should say {"email":"example@gmail.com", "password1":"abc123", "password2":"abc123"}.
    types: [REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE],
    promise: client =>
      client.post('api/register/', {
        data: body
      })
  };
}

// ==========================================
// ============== LOGIN ACTION ==============
// ==========================================

export function login(strategy, data) {
  // const socketId = socket.io.engine.id;
  return {
    types: [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE],
    promise: async ({ client, restApp, app }) => {
      try {
        const response = await restApp.authenticate({
          ...data,
          strategy
          // socketId
        });
        await setCookie({ app })(response);
        setToken({ client, app, restApp })(response);
        setUser({ app, restApp })(response);
        return response;
      } catch (error) {
        if (strategy === 'local') {
          return catchValidation(error);
        }
        throw error;
      }
    }
  };
}

// export function login(body) {
//   return {
//     types: [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE],
//     promise: (client) => client.post('api/login/', {
//       data: body
//     })
//   };
// }

// ===========================================
// ============== LOGOUT ACTION ==============
// ===========================================

export function logout() {
  return {
    types: [LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE],
    promise: client => client.post('api/logout/')
  };
}
