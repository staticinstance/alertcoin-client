import { createSelector } from 'reselect';
import selectedExchangeSelector from './selected-exchange-selector'

export default createSelector(
  state => selectedExchangeSelector(state),
  state => state.selectedPair,
  (selectedExchange, selectedPairKey) =>
    selectedExchange && selectedPairKey && selectedExchange.pairs[selectedPairKey]
    ? selectedExchange.pairs[selectedPairKey].ticker
    : selectedExchange.pairs[Object.keys(selectedExchange.pairs)[0]].ticker
)
