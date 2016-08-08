import { createSelector } from 'reselect';
import selectedExchangeSelector from './selected-exchange-selector'

//curry a pair list to inject into global state
export default createSelector(
  selectedExchangeSelector,
  selectedExchange => ({
      pairList: Object.keys(
        selectedExchange && selectedExchange.pairs
        ? selectedExchange.pairs
        : {}
      ).map(key => selectedExchange.pairs[key])
  })
)
