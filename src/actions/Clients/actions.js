import { LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE,
SUBMIT_CHOSEN_DEVELOPER_REQUEST, SUBMIT_CHOSEN_DEVELOPER_SUCCESS, SUBMIT_CHOSEN_DEVELOPER_FAILURE } from '../../redux/modules/constants';

// ==============================================
// =============== GET ALL CLIENTS ==============
// ==============================================

export function fetchClients() {
  return {
    types: [LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE],
    promise: (client) => client.get("api/turksystem/user/client/")
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
