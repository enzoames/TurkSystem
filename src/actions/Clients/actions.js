import { LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE,
  LOAD_CLIENT_BID_SELECTION_REQUEST , LOAD_CLIENT_BID_SELECTION_SUCCESS, LOAD_CLIENT_BID_SELECTION_FAILURE,
  SUBMIT_CHOSEN_DEVELOPER_REQUEST, SUBMIT_CHOSEN_DEVELOPER_SUCCESS, SUBMIT_CHOSEN_DEVELOPER_FAILURE, 
  LOAD_SD_RESULTS_REQUEST, LOAD_SD_RESULTS_SUCCESS, LOAD_SD_RESULTS_FAILURE
} from '../../redux/modules/constants';

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


// =======================================================
// =============== SUBMIT CHOSEN DEVELOPERS ==============
// =======================================================


export function submitChosenDeveloper(body) {
  return {
    types: [SUBMIT_CHOSEN_DEVELOPER_REQUEST, SUBMIT_CHOSEN_DEVELOPER_SUCCESS, SUBMIT_CHOSEN_DEVELOPER_FAILURE],
    promise: (client) => client.post('api/turksystem/contract/', {
      data: body
    })
  };
}

// ==============================================
// =============== FETCH SD RESULT ==============
// ==============================================


export function fetchSDResults(email) {
  return {
    types: [LOAD_SD_RESULTS_REQUEST, LOAD_SD_RESULTS_SUCCESS, LOAD_SD_RESULTS_FAILURE],
    promise: (client) => client.get(`api/turksystem/client/sdresults/?email=${email}`)
  };
}










