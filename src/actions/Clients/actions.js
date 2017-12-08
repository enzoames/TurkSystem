import { LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE,
  LOAD_SELECTED_BIDS_REQUEST , LOAD_SELECTED_BIDS_SUCCESS, LOAD_SELECTED_BIDS_FAILURE,
  SUBMIT_CHOSEN_DEVELOPER_REQUEST, SUBMIT_CHOSEN_DEVELOPER_SUCCESS, SUBMIT_CHOSEN_DEVELOPER_FAILURE, 
  LOAD_SD_RESULTS_REQUEST, LOAD_SD_RESULTS_SUCCESS, LOAD_SD_RESULTS_FAILURE,
  POST_RATE_DEV_REQUEST, POST_RATE_DEV_SUCCESS, POST_RATE_DEV_FAILURE
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
// ======== GET ALL BIDS SELECTED BY EMAIL ====
// =============================================

export function fetchSelectedBids(email, credential) {
  return {
    types: [LOAD_SELECTED_BIDS_REQUEST , LOAD_SELECTED_BIDS_SUCCESS, LOAD_SELECTED_BIDS_FAILURE],
    promise: (client) => client.get(`api/turksystem/chosensds/?email=${email}&credential=${credential}`)
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
    promise: (client) => client.get(`api/turksystem/sdresults/?email=${email}`)
  };
}


// ============================================
// =============== POST RATE DEV ==============
// ============================================

export function postRateDeveloper(body){
  return{
    types: [POST_RATE_DEV_REQUEST, POST_RATE_DEV_SUCCESS, POST_RATE_DEV_FAILURE],
    promise: (client) => client.put('api/turksystem/evaluatesystem/', {
      data: body
    })
  }
}







