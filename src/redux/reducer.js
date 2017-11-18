import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import info from './modules/info';
import systemdemands from './modules/systemdemands';
import clients from './modules/clients';
import developers from './modules/developers';
import turkuser from './modules/turkuser';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  info,
  systemdemands,
  clients,
  developers,
  turkuser
});
