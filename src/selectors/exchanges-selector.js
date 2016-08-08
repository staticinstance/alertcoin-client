import { createSelector } from 'reselect';

//curry an exchange list to inject into global state
export default createSelector(
  state => ({
    exchangeList:
      state && state.exchanges
        ? Object.keys(state.exchanges).map(key => state.exchanges[key])
        : []
  }),
  exchanges => exchanges
)
