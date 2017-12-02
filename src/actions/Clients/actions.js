import { LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE,
         LOAD_CLIENT_BID_SELECTION_REQUEST , LOAD_CLIENT_BID_SELECTION_SUCCESS,
         LOAD_CLIENT_BID_SELECTION_FAILURE } from '../../redux/modules/constants';

// ==============================================
// =============== GET ALL CLIENTS ==============
// ==============================================

export function fetchClients() {
  return {
    types: [LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE],
    promise: (client) => client.get("api/turksystem/user/client/")
  };
}


// =============================================
// ======== GET ALL BIDS SELECTED BY CLIENT ====
// =============================================

export function fetchBidSelectionsByClient(email) {
  return {
    types: [LOAD_CLIENT_BID_SELECTION_REQUEST , LOAD_CLIENT_BID_SELECTION_SUCCESS, LOAD_CLIENT_BID_SELECTION_FAILURE],
    promise: (client) => client.get(`api/turksystem/user/client/bidselections/?email=${email}`)
  };
}
