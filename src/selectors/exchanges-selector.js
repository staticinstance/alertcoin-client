import { createSelector } from 'reselect';

export default createSelector(
  state => ({
    exchangeList:
      state && state.exchanges
        ? Object.keys(state.exchanges).map(key => state.exchanges[key])
        : []
  }),
  exchanges => exchanges
)
