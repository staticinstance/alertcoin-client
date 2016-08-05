import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExchangeList from '../components/exchange-list'
import { selectExchange } from '../actions/index';

function mapDispachtToProps(dispatch){
  return bindActionCreators({
    selectExchange
  }, dispatch)

}

function mapStateToProps(state){
  let exchanges = state.exchanges;
  
  return {
    exchanges
  }
}

export default connect(mapStateToProps, mapDispachtToProps)(ExchangeList);
