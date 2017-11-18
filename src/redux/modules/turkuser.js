import { LOAD_TURKUSER_REQUEST, LOAD_TURKUSER_SUCCESS, LOAD_TURKUSER_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  details: "",
};

export default function turkuser(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_TURKUSER_REQUEST:
      console.log('\nLOAD_TURKUSER_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_TURKUSER_SUCCESS:
      console.log('\nLOAD_TURKUSER_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        details: action.result[0]
      });
    case LOAD_TURKUSER_FAILURE:
      console.log('\nLOAD_TURKUSER_FAILURE', action);
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
  return globalState.turkuser && globalState.turkuser.isLoaded;
}

