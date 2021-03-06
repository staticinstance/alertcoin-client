import { combineReducers } from 'redux';
import exchanges from './exchanges-reducer';
import selectedExchange from './selected-exchange-reducer';
import selectedPair from './selected-pair-reducer';
import selectedPrice from './selected-price-reducer';
import selectedDestination from './selected-destination-reducer';
import selectedDirection from './selected-price-direction-reducer';
import modalConfig from './modal-reducer';
import auth from './auth-reducer';

export default combineReducers({
  auth,
  exchanges,
  selectedExchange,
  selectedPair,
  selectedPrice,
  selectedDestination,
  selectedDirection,
  modalConfig
});
