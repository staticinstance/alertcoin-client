import { createSelector } from 'reselect';

const exchangesSelector = state => state.exchanges;
const selectedExchangeSelector = state => state.selectedExchange;
const getSelectedExchange = (exchanges, selectedExchangeKey) => exchanges[selectedExchangeKey];

export default createSelector(
  exchangesSelector,
  selectedExchangeSelector,
  getSelectedExchange
)
