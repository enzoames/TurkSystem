import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import systemdemands from './modules/systemdemands';
import systemdemand from './modules/systemdemand';
import clients from './modules/clients';
import developers from './modules/developers';
import turkuser from './modules/turkuser';
import bid from './modules/bid';
import clientSDs from './modules/clientSDs';
import selectedBids from './modules/selectedBids';
import sdresults from './modules/sdresults';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  systemdemands,
  systemdemand,
  clients,
  developers,
  turkuser,
  bid,
  clientSDs,
  selectedBids,
  sdresults
});
