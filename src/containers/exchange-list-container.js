import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExchangeList from '../components/exchange-list'
import { selectExchange } from '../actions/index';
import exchangesSelector from '../selectors/exchanges-selector';

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectExchange
  }, dispatch)

}

function mapStateToProps(state){

  return {
    exchangeList: exchangesSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeList);
