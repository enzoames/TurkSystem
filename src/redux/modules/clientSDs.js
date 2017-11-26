import { LOAD_CLIENT_SDS_REQUEST, LOAD_CLIENT_SDS_SUCCESS, LOAD_CLIENT_SDS_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  sdList: []
};

export default function clientSDs(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CLIENT_SDS_REQUEST:
      console.log('\nLOAD_CLIENT_SDS_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true,
        isLoaded: false //new
      });
    case LOAD_CLIENT_SDS_SUCCESS:
      console.log('\nLOAD_CLIENT_SDS_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        sdList: action.result
      });
    case LOAD_CLIENT_SDS_FAILURE:
      console.log('\nLOAD_CLIENT_SDS_FAILURE', action);
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
  return globalState.clientSDs && globalState.clientSDs.isLoaded;
}


