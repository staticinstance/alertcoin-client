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
  return {
    pairs: pairsSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairList);
