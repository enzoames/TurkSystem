import { LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  clientList: []
};

export default function clients(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CLIENTS_REQUEST:
      console.log('\nLOAD_CLIENTS_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_CLIENTS_SUCCESS:
      console.log('\nLOAD_CLIENTS_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        //accessToken: action.result.accessToken,
        clientList: action.result
      });
    case LOAD_CLIENTS_FAILURE:
      console.log('\nLOAD_CLIENTS_FAILURE', action);
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
  return globalState.clients && globalState.clients.isLoaded;
}

