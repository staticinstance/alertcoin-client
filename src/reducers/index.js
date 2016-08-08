import { combineReducers } from 'redux';
import exchanges from './exchanges-reducer';
import selectedExchange from './selected-exchange-reducer';
import selectedPair from './selected-pair-reducer';

export default combineReducers({
  exchanges,
  selectedExchange,
  selectedPair
});
