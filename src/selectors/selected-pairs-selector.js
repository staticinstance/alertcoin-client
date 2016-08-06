import { createSelector } from 'reselect';
import selectedExchangeSelector from './selected-exchange-selector'

const getSelectedPairs = selectedExchange => selectedExchange.pairs || {};

export default createSelector(
  selectedExchangeSelector,
  getSelectedPairs
)
