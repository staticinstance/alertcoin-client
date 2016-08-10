import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectDestination } from '../actions';
import Destination from '../components/destination';

export default connect(
  state => ({destination: state.selectedDestination || ''}),
  dispatch => bindActionCreators({selectDestination}, dispatch)
)(Destination);
