import counter from './reducer'
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

export default combineReducers({
  counter,
})