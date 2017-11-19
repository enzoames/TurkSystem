import { LOAD_SD_REQUEST, LOAD_SD_SUCCESS, LOAD_SD_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  sd: {}
};

export default function systemdemand(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SD_REQUEST:
      console.log('\nLOAD_SD_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_SD_SUCCESS:
      console.log('\nLOAD_SD_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        sd: action.result
      });
    case LOAD_SD_FAILURE:
      console.log('\nLOAD_SD_FAILURE', action);
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
  return globalState.systemdemand && globalState.systemdemand.isLoaded;
}
