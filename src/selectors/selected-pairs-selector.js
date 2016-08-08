import { createSelector } from 'reselect';
import selectedExchangeSelector from './selected-exchange-selector'

export default createSelector(
  state => state => ({
      pairList: Object.keys(
        selectedExchangeSelector(state) && selectedExchangeSelector(state).pairs
        ? selectedExchangeSelector(state).pairs
        : {}
      ).map(key => selectedExchangeSelector(state).pairs[key])
  })
)
