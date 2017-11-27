import { 
  LOAD_BID_REQUEST, LOAD_BID_SUCCESS, LOAD_BID_FAILURE, LOAD_BID_RESET,
  BID_RESET } from './constants';

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
        isFetching: true,
        isLoaded: false //new
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

    case BID_RESET:
      console.log('\nBID_RESET', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: false,
        bidList: []
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

