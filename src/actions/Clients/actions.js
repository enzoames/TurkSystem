import { LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE } from '../../redux/modules/constants';

// ==============================================
// =============== GET ALL CLIENTS ==============
// ==============================================

export function fetchClients() {
  return {
    types: [LOAD_CLIENTS_REQUEST, LOAD_CLIENTS_SUCCESS, LOAD_CLIENTS_FAILURE],
    promise: (client) => client.get("api/turksystem/user/client/")
  };
}
