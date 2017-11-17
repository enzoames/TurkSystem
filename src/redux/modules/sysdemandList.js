import { LOAD_SD_LIST_REQUEST, LOAD_SD_LIST_SUCCESS, LOAD_SD_LIST_FAILURE} from './constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  sdList: []
};

export default function sysdemandList(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SD_LIST_REQUEST:
      console.log('\nLOAD_SD_LIST_REQUEST', action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_SD_LIST_SUCCESS:
      console.log('\nLOAD_SD_LIST_SUCCESS', action);
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        //accessToken: action.result.accessToken,
        sdList: action.result
      });
    case LOAD_SD_LIST_FAILURE:
      console.log('\nLOAD_SD_LIST_FAILURE', action);
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
  return globalState.sysdemandList && globalState.sysdemandList.isLoaded;
}





// credential: "",
// completed_projects: 0,
// accepted: false,
// name: "",
// rating: 0,
// lastname: "",
// warning_count: 0,
// id: 0,
// warning: false,
// money: 0,
// message: "",
// email: "",
// pending: true

// credential: action.result.credential,
// completed_projects: action.result.completed_projects,
// accepted: action.result.accepted,
// name: action.result.name,
// rating: action.result.rating,
// lastname: action.result.lastname,
// warning_count: action.result.warning_count,
// id: action.result.id,
// warning: action.result.warning,
// money: action.result.money,
// message: action.result.message,
// email: action.result.email,
// pending: action.result.pending