import { createSelector } from 'reselect';
import selectedExchangeSelector from './selected-exchange-selector'

export default createSelector(
  selectedExchangeSelector,
  selectedExchange => ({
      pairs: Object.keys(selectedExchange && selectedExchange.pairs
        ? selectedExchange.pairs
        : {}
      ).map(key => selectedExchange.pairs[key]) || []
  })
)
