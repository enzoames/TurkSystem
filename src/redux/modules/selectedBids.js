import { LOAD_CLIENT_BID_SELECTION_REQUEST, LOAD_CLIENT_BID_SELECTION_SUCCESS, LOAD_CLIENT_BID_SELECTION_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  selectedBidsList: []
};

export default function selectedBids(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CLIENT_BID_SELECTION_REQUEST:
      console.log('\nLOAD_CLIENT_BID_SELECTION_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_CLIENT_BID_SELECTION_SUCCESS:
      console.log('\nLOAD_CLIENT_BID_SELECTION_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        sd: action.result
      });
    case LOAD_CLIENT_BID_SELECTION_FAILURE:
      console.log('\nLOAD_CLIENT_BID_SELECTION_FAILURE', action);
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
  return globalState.selectedBids && globalState.selectedBids.isLoaded;
}
