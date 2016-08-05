import { combineReducers } from 'redux';
import exchanges from './exchanges'
import pairs from './pairs'

export default combineReducers({
  exchanges,
  pairs
});
