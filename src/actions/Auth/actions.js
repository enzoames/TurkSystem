import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, 
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, 
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE,
  LOAD_TURKUSER_REQUEST, LOAD_TURKUSER_SUCCESS, LOAD_TURKUSER_FAILURE
} from '../../redux/modules/constants';

//import cookie from 'js-cookie';

// =========================================
// ============== LOAD ACTION ==============
// =========================================

export function load() {
  return {
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
    promise: (client) => client.get('api/turksystem/load/',{
      authenticated: true,
      body: true
    })
  };
}

// =============================================
// ============== REGISTER ACTION ==============
// =============================================

export function register(body) {
  return {
    // body should say {"email":"example@gmail.com", "password1":"abc123", "password2":"abc123"} NOT FOR TURK SYSTEM
    types: [REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE],
    promise: client => client.post('api/turksystem/register/', {
        data: body
    })
  };
}

// ==========================================
// ============== LOGIN ACTION ==============
// ==========================================

export function login(body) {
  return {
    types: [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE],
    promise: (client) => client.post('api/turksystem/login/', {
      data: body
    })
  };
}

// ===========================================
// ============== LOGOUT ACTION ==============
// ===========================================

export function logout() {
  return {
    types: [LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE],
    promise: client => client.post('api/turksystem/logout/')
  };
}


// ==============================================
// =============== GET SINGLE USER ==============
// ==============================================

export function fetchSingleUser(id) {
  return {
    types: [LOAD_TURKUSER_REQUEST, LOAD_TURKUSER_SUCCESS, LOAD_TURKUSER_FAILURE],
    promise: (client) => client.get(`api/turksystem/user/${id}`)
  };
}







