import { LOAD_DEVELOPERS_REQUEST, LOAD_DEVELOPERS_SUCCESS, LOAD_DEVELOPERS_FAILURE } from '../../redux/modules/constants';

// ==============================================
// =============== GET ALL CLIENTS ==============
// ==============================================

export function fetchDevelopers() {
  return {
    types: [LOAD_DEVELOPERS_REQUEST, LOAD_DEVELOPERS_SUCCESS, LOAD_DEVELOPERS_FAILURE],
    promise: (client) => client.get("api/turksystem/user/developer/")
  };
}
