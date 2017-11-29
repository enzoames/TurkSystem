import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, 
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, 
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  isLogedIn: false,
  isLogedOut: true,
  user: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // ==================================
    // ============== LOAD ==============
    // ==================================

    case LOAD_USER_REQUEST:
      console.log('\nLOAD_USER_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_USER_SUCCESS:
      console.log('\nLOAD_USER_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        //accessToken: action.result.accessToken,
        user: action.result.user
      });
    case LOAD_USER_FAILURE:
      console.log('\nLOAD_USER_FAILURE', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        error: action.error
      });

    // ===================================
    // ============== LOGIN ==============
    // ===================================

    case LOGIN_USER_REQUEST:
      console.log('\nLOGIN_USER_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOGIN_USER_SUCCESS:
      console.log('\nLOGIN_USER_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        isLogedIn: true,
        isLogedOut: false,
        //accessToken: action.result.accessToken,
        user: action.result.user
      });
    case LOGIN_USER_FAILURE:
      console.log('\nLOGIN_USER_FAILURE', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        error: action.error//result[0].error
      }); 
    // ======================================
    // ============== REGISTER ==============
    // ======================================

    case REGISTER_USER_REQUEST:
      console.log('\nREGISTER_USER_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true,
        isLoaded: false
      });
    case REGISTER_USER_SUCCESS:
      console.log('\nREGISTER_USER_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        user: action.result,
        isLogedIn: true,
        isLogedOut: false
      });
    case REGISTER_USER_FAILURE:
      console.log('\nREGISTER_USER_FAILURE', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        error: action.error
      });

    // ====================================
    // ============== LOGOUT ==============
    // ====================================

    case LOGOUT_USER_REQUEST:
      console.log('\nLOGOUT_USER_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true,
        isLoaded: false, //new
      });
    case LOGOUT_USER_SUCCESS:
      console.log('\nLOGOUT_USER_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        //accessToken: null,
        user: null,
        isLogedIn: false,
        isLogedOut: true
      });
    case LOGOUT_USER_FAILURE:
      console.log('\nLOGOUT_USER_FAILURE', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        error: action.error
      });
    default:
      return state;
  }
}

// =====================================
// ============== HELPERS ==============
// =====================================

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.isLoaded;
}





// credential: "",
// completed_projects: 0,
// accepted: false,
// name: "",
// rating: 0,
// lastname: "",
// warning_count: 0,
// id: 0,
// warning: false,
// money: 0,
// message: "",
// email: "",
// pending: true

// credential: action.result.credential,
// completed_projects: action.result.completed_projects,
// accepted: action.result.accepted,
// name: action.result.name,
// rating: action.result.rating,
// lastname: action.result.lastname,
// warning_count: action.result.warning_count,
// id: action.result.id,
// warning: action.result.warning,
// money: action.result.money,
// message: action.result.message,
// email: action.result.email,
// pending: action.result.pending