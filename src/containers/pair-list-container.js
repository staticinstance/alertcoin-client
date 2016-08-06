import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PairList from '../components/pair-list'
import { selectPair } from '../actions/index'
import selectedExchange from '../selectors/selected-exchange-selector'

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectPair
  }, dispatch)

}

function mapStateToProps(state){
  console.log(state)
  return {
    pairs: selectedExchange(state).pairs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairList);
