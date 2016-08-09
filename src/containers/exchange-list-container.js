import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExchangeList from '../components/exchange-list'
import { selectExchange } from '../actions';
import exchangesSelector from '../selectors/exchanges-selector';

export default connect(
  state => exchangesSelector(state),
  dispatch => bindActionCreators({selectExchange}, dispatch)
)(ExchangeList);
