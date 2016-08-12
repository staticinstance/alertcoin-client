import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginOrCreateUser } from '../actions';
import AuthForm from '../components/auth-form';

export default connect(
  state => state,
  dispatch => bindActionCreators({loginOrCreateUser}, dispatch)
)(AuthForm);
