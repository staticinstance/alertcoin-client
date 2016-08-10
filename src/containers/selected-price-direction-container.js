import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDirection } from '../actions';
import PriceDirection from '../components/price-direction';

export default connect(
  state => ({direction: state.selectedDirection || ''}),
  dispatch => bindActionCreators({selectDirection}, dispatch)
)(PriceDirection);
