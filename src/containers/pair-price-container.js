import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectPrice, selectPriceClick } from '../actions';
import selectedPairSelector from '../selectors/selected-pair-selector';
import SelectedPrice from '../components/pair-price';

export default connect(
  state => ({pair: selectedPairSelector(state).ticker, price: state.selectedPrice || ''}),
  dispatch => bindActionCreators({selectPrice, selectPriceClick}, dispatch)
)(SelectedPrice);
