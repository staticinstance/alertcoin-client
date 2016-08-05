import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PairList from '../components/pair-list'
import { selectPair } from '../actions/index'

function mapDispachtToProps(dispatch){
  return bindActionCreators({
    selectPair
  }, dispatch)

}

function mapStateToProps(state){
  let pairs = state.pairs;
  return {
    pairs
  }
}

export default connect(mapStateToProps, mapDispachtToProps)(PairList);
