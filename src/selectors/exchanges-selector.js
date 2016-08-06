import { createSelector } from 'reselect';

const getExchanges = state => Object.keys(state.exchanges).map(key => state.exchanges[key]);
export createSelector(
  getExchanges
)
