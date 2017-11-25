import { LOAD_BID_REQUEST, LOAD_BID_SUCCESS, LOAD_BID_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  bidList: []
};

export default function bid(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_BID_REQUEST:
      console.log('\nLOAD_BID_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_BID_SUCCESS:
      console.log('\nLOAD_BID_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        bidList: action.result
      });
    case LOAD_BID_FAILURE:
      console.log('\nLOAD_BID_FAILURE', action);
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
  return globalState.bid && globalState.bid.isLoaded;
}

