import { createSelector } from 'reselect';
import selectedExchangeSelector from './selected-exchange-selector'

const getSelectedPairs = selectedExchange => Object.keys(selectedExchange ? selectedExchange.pairs : {}).map(key => selectedExchange.pairs[key]) || [];

export default createSelector(
  selectedExchangeSelector,
  getSelectedPairs
)
