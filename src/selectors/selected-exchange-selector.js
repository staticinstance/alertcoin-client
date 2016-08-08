import { createSelector } from 'reselect';

//curry the selected exchange
export default createSelector(
  state => state.exchanges,
  state => state.selectedExchange,
  (exchanges, selectedExchangeKey) => exchanges[selectedExchangeKey] || exchanges[Object.keys(exchanges)[0]]
)
