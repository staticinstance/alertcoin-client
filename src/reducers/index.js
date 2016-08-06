import { combineReducers } from 'redux';
import exchanges from './exchanges'
import selectedExchange from './selected-exchange'

export default combineReducers({
  exchanges,
  selectedExchange
});
