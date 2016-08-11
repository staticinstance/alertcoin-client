import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initState } from '../actions';
import App from '../components/app.js'

export default connect(
  state => state,
  dispatch => bindActionCreators({initState}, dispatch)
)(App);
