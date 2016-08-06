import { combineReducers } from 'redux';
import exchanges from './exchanges-reducer'
import selectedExchange from './selected-exchange-reducer'

export default combineReducers({
  exchanges,
  selectedExchange
});
