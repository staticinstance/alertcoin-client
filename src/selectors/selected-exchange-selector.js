import { createSelector } from 'reselect';

export default createSelector(
  state => state.exchanges,
  state => state.selectedExchange,
  (exchanges, selectedExchangeKey) => exchanges[selectedExchangeKey] || exchanges[Object.keys(exchanges)[0]]
)
