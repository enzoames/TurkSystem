import { LOAD_SD_RESULTS_REQUEST, LOAD_SD_RESULTS_SUCCESS, LOAD_SD_RESULTS_FAILURE } from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  results: {}
};

export default function sdresults(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SD_RESULTS_REQUEST:
      console.log('\nLOAD_SD_RESULTS_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_SD_RESULTS_SUCCESS:
      console.log('\nLOAD_SD_RESULTS_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        results: action.result
      });
    case LOAD_SD_RESULTS_FAILURE:
      console.log('\nLOAD_SD_RESULTS_FAILURE', action);
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
  return globalState.sdresults && globalState.sdresults.isLoaded;
}
