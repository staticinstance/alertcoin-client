import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions';
import LogoutButton from '../components/logout-button';

export default connect(
  state => state,
  dispatch => bindActionCreators({logout}, dispatch)
)(LogoutButton);
