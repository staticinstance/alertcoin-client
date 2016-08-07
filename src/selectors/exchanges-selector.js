import { createSelector } from 'reselect';

const getExchangesSelector = state => state && state.exchanges
    ?
      Object.keys(state.exchanges).map(key => state.exchanges[key])
    :
      [];

const getExchanges = exchanges => exchanges;

export default createSelector(
  getExchangesSelector,
  getExchanges
)
