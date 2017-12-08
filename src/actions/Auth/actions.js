import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, 
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, 
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, 
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE,
  LOAD_TURKUSER_REQUEST, LOAD_TURKUSER_SUCCESS, LOAD_TURKUSER_FAILURE,
  UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILURE,
  DEPOSIT_MONEY_REQUEST, DEPOSIT_MONEY_SUCCESS, DEPOSIT_MONEY_FAILURE,
  BID_RESET, CLIENT_SDS_RESET, SELECTED_BID_RESET,
  MESSAGE_SU_REQUEST, MESSAGE_SU_SUCCESS, MESSAGE_SU_FAILURE,
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE
} from '../../redux/modules/constants';

//import cookie from 'js-cookie';

// =========================================
// ============== LOAD ACTION ==============
// =========================================

export function load() {
  return {
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
    promise: (client) => client.get('api/turksystem/load/',{
      authenticated: true,
      body: true
    })
  };
}

// =============================================
// ============== REGISTER ACTION ==============
// =============================================

export function register(body) {
  return {
    // body should say {"email":"example@gmail.com", "password1":"abc123", "password2":"abc123"} NOT FOR TURK SYSTEM
    types: [REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE],
    promise: client => client.post('api/turksystem/register/', {
        data: body
    })
  };
}

// ==========================================
// ============== LOGIN ACTION ==============
// ==========================================

export function login(body) {
  return {
    types: [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE],
    promise: (client) => client.post('api/turksystem/login/', {
      data: body
    })
  };
}

// ===========================================
// ============== LOGOUT ACTION ==============
// ===========================================

export function logout() {
  return {
    types: [LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE],
    promise: client => client.post('api/turksystem/logout/')
  };
}


// ===========================================
// ============== DELETE ACTION ==============
// ===========================================

export function deleteUser(body) {
  return {
    types: [DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE],
    promise: client => client.post('api/turksystem/deleteuser/', {
      data: body
    })
  };
}


// ==============================================
// =============== GET SINGLE USER ==============
// ==============================================

export function fetchSingleUser(id) {
  return {
    types: [LOAD_TURKUSER_REQUEST, LOAD_TURKUSER_SUCCESS, LOAD_TURKUSER_FAILURE],
    promise: (client) => client.get(`api/turksystem/user/${id}`)
  };
}

// ==================================================
// =============== UPDATE USER PROFILE ==============
// ==================================================

export function updateUserProfile(body){
  return{
    types: [UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAILURE],
    promise: (client) => client.put('api/turksystem/updateuser/', {
      data: body
    })
  }
}


// ===========================================
// =============== MONEY DEPOST ==============
// ===========================================

export function depositMoney(body){
  return{
    types: [DEPOSIT_MONEY_REQUEST, DEPOSIT_MONEY_SUCCESS, DEPOSIT_MONEY_FAILURE],
    promise: (client) => client.post('api/turksystem/deposite/', {
      data: body
    })
  }
}



// =================================================
// =============== MESSAGE SUPER USER ==============
// =================================================

export function messageSuperUser(body){
  return{
    types: [MESSAGE_SU_REQUEST, MESSAGE_SU_SUCCESS, MESSAGE_SU_FAILURE],
    promise: (client) => client.post('api/turksystem/messagesu/', {
      data: body
    })
  }
}




// ==========================================
// ==========================================
// =============== RESET STATE ==============
// ==========================================
// ==========================================

export function resetBid(){
  return{
    type: BID_RESET
  };
}

export function resetClientSDs(){
  return{
    type: CLIENT_SDS_RESET
  }
}

export function resetSelectedBid(){
  return{
    type: SELECTED_BID_RESET
  }
}




