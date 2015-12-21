'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormPassword from '../components/FormPassword';

class FormPasswordContainer extends Component {
  render() {
  	return (
  	  <FormPassword {...this.props} />
  	)
  }
}

function mapStateToProps(state) {
  const {reg:{IsFocus, itemState}} = state;
  const {valid, tips} = itemState[1];
  return {
  	IsFocus,
  	valid,
  	tips
  }
}

export default connect(mapStateToProps)(FormPasswordContainer);