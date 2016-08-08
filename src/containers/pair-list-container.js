import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PairList from '../components/pair-list'
import { selectPair } from '../actions/index'
import pairsSelector from '../selectors/selected-pairs-selector'

export default connect(
  state => ({pairs: pairsSelector(state)}),
  dispatch => bindActionCreators({selectPair}, dispatch)
)(PairList);
