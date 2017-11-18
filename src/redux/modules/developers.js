import { LOAD_DEVELOPERS_REQUEST, LOAD_DEVELOPERS_SUCCESS, LOAD_DEVELOPERS_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  developerList: []
};

export default function developers(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_DEVELOPERS_REQUEST:
      console.log('\nLOAD_DEVELOPERS_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_DEVELOPERS_SUCCESS:
      console.log('\nLOAD_DEVELOPERS_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        developerList: action.result
      });
    case LOAD_DEVELOPERS_FAILURE:
      console.log('\nLOAD_DEVELOPERS_FAILURE', action);
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
  return globalState.developers && globalState.developers.isLoaded;
}

