import { createSelector } from 'reselect';
import selectedExchangeSelector from './selected-exchange-selector'

export default createSelector(
  state => selectedExchangeSelector(state),
  (exchange) => Object.keys(
        exchange && exchange.pairs
        ? exchange.pairs
        : {}
      ).map(key => exchange.pairs[key]))
