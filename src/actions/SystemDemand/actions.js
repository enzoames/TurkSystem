import { LOAD_SD_LIST_REQUEST, LOAD_SD_LIST_SUCCESS, LOAD_SD_LIST_FAILURE,
	LOAD_SD_REQUEST, LOAD_SD_SUCCESS, LOAD_SD_FAILURE,
	LOAD_BID_REQUEST, LOAD_BID_SUCCESS, LOAD_BID_FAILURE,
} from '../../redux/modules/constants';

// ============================================================
// =============== GET SYSTEM DEMAND LIST ACTION ==============
// ============================================================

export function fetchSDList() {
  return {
    types: [LOAD_SD_LIST_REQUEST, LOAD_SD_LIST_SUCCESS, LOAD_SD_LIST_FAILURE],
    promise: (client) => client.get('api/turksystem/sysdemand/')
  };
}

// =================================================================
// =============== GET CLIENT'S SYSTEM DEMANDS ACTION ==============
// =================================================================

export function fetchClientSDs(email) {
  return {
    types: [LOAD_SD_LIST_REQUEST, LOAD_SD_LIST_SUCCESS, LOAD_SD_LIST_FAILURE],
    promise: (client) => client.get(`api/turksystem/sysdemand/email/?email=${email}`)
  };
}

// =============================================================
// ============== GET SINGLE SYSTEM DEMAND ACTION ==============
// =============================================================

export function fetchSingleSD(id) {
  return {
    types: [LOAD_SD_REQUEST, LOAD_SD_SUCCESS, LOAD_SD_FAILURE],
    promise: (client) => client.get(`api/turksystem/sysdemand/${id}`)
  };
}

// =============================================
// ============== FETCH BID BY ID ==============
// =============================================

export function fetchBidBySDID(id) {
  return {
    types: [LOAD_BID_REQUEST, LOAD_BID_SUCCESS, LOAD_BID_FAILURE],
    promise: (client) => client.get(`api/turksystem/bid/sd/${id}`)
  };
}

// ======================================================================
// ============== FETCH BID BY EMAIL | CLIENT OR DEVELOPER ============== 
// ======================================================================

export function fetchBidByEmail(email) {
  return {
    types: [LOAD_BID_REQUEST, LOAD_BID_SUCCESS, LOAD_BID_FAILURE],
    promise: (client) => client.get(`api/turksystem/bid/email/?email=${email}`)
  };
}
