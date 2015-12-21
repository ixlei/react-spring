'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FormUserName from '../components/FormUsername';

class FormUsernameContainer extends Component {
  render() {
  	return (
	  <FormUserName {...this.props} />
  	)
  }
}

function mapStateToProps(state) {
  const {reg: {IsFocus, itemState}} = state;
  const {valid, tips} = itemState[0];
  return {
  	IsFocus,
  	valid, 
  	tips
  }
}

export default connect(mapStateToProps)(FormUsernameContainer);
