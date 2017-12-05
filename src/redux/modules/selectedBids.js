import { LOAD_SELECTED_BIDS_REQUEST, LOAD_SELECTED_BIDS_SUCCESS, LOAD_SELECTED_BIDS_FAILURE, SELECTED_BID_RESET} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  selectedList: []
};

export default function selectedBids(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SELECTED_BIDS_REQUEST:
      console.log('\nLOAD_SELECTED_BIDS_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_SELECTED_BIDS_SUCCESS:
      console.log('\nLOAD_SELECTED_BIDS_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        selectedList: action.result
      });
    case LOAD_SELECTED_BIDS_FAILURE:
      console.log('\nLOAD_SELECTED_BIDS_FAILURE', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        error: action.error
      });
    case SELECTED_BID_RESET:
      console.log('\nSELECTED_BID_RESET', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: false,
        selectedList: []
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
