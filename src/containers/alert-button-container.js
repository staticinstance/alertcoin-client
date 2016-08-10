import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAlert } from '../actions';
import AlertButton from '../components/alert-button';

export default connect(
  state => state,
  dispatch => bindActionCreators({addAlert}, dispatch)
)(AlertButton);
