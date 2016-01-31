'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormComCode from '../components/FormComCode';

class FormComCodeContainer extends Component {
  render() {
  	return (
  	  <FormComCode {...this.props} />
  	)
  }
}

function mapStateToProps(state) {
  const {reg:{IsFocus, itemState}, user: {userType}} = state;
  const {valid, tips} = itemState[6];
  return {
  	IsFocus,
  	valid,
  	tips,
  	userType
  }
}

export default connect(mapStateToProps)(FormComCodeContainer);