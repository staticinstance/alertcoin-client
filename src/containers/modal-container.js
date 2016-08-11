import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideModal, showModal } from '../actions';
import ModalAlert from '../components/modal.js'

export default connect(
  state => state,
  dispatch => bindActionCreators({hideModal, showModal}, dispatch)
)(ModalAlert);
