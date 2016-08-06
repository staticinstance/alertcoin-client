import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PairList from '../components/pair-list'
import { selectPair } from '../actions/index'
import pairsSelector from '../selectors/selected-pairs-selector'

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectPair
  }, dispatch)

}

function mapStateToProps(state){
  let pairs = pairsSelector(state)
  return {
    pairs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairList);
