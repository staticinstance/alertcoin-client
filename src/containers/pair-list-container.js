import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PairList from '../components/pair-list'
import { selectPair } from '../actions'
import selectedPairsSelector from '../selectors/selected-pairs-selector'

export default connect(
  state => ({pairs: selectedPairsSelector(state)}),
  dispatch => bindActionCreators({selectPair}, dispatch)
)(PairList);
