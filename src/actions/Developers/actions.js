import { LOAD_DEVELOPERS_REQUEST, LOAD_DEVELOPERS_SUCCESS, LOAD_DEVELOPERS_FAILURE,
	POST_SD_RESULT_REQUEST, POST_SD_RESULT_SUCCESS, POST_SD_RESULT_FAILURE
 } from '../../redux/modules/constants';

// ==============================================
// =============== GET ALL CLIENTS ==============
// ==============================================

export function fetchDevelopers() {
  return {
    types: [LOAD_DEVELOPERS_REQUEST, LOAD_DEVELOPERS_SUCCESS, LOAD_DEVELOPERS_FAILURE],
    promise: (client) => client.get("api/turksystem/user/developer/")
  };
}


// ========================================================
// =============== POST SYSTEM DEMAND RESULT ==============
// ========================================================

export function postSDResult(body){
  return{
    types: [POST_SD_RESULT_REQUEST, POST_SD_RESULT_SUCCESS, POST_SD_RESULT_FAILURE],
    promise: (client) => client.put('api/turksystem/contract/', {
      data: body
    })
  }
}
