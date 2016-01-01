'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormIdcard from '../components/FormIdcard';

class FormIdcardContainer extends Component {
  render() {
  	return (
  	  <FormIdcard {...this.props} />
  	)
  }
}

function mapStateToProps(state) {
  const {reg:{IsFocus, itemState}, user: {userType}} = state;
  const {valid, tips} = itemState[4];
  return {
  	IsFocus,
  	valid,
  	tips,
  	userType
  }
}

export default connect(mapStateToProps)(FormIdcardContainer);