import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAlert } from '../actions';

export default connect(
  state => state,
  dispatch => bindActionCreators({addAlert}, dispatch)
)(props => <button onClick={ () => props.addAlert() }>Alert Me!</button>);
