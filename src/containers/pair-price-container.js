//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//todo implement this import { selectPrice } from '../actions/index';
import selectedPairSelector from '../selectors/selected-pair-selector';
import SelectedPrice from '../components/pair-price';

export default connect(
  state => selectedPairSelector(state)
  //todo implement this dispatch => bindActionCreators({selectPrice}, dispatch)
)(SelectedPrice);
