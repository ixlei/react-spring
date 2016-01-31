'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormName from '../components/FormName';

class FormNameContainer extends Component {
  render() {
  	return (
  	  <FormName {...this.props} />
  	)
  }
}

function mapStateToProps(state) {
  const {reg:{IsFocus, itemState}} = state;
  const {valid, tips} = itemState[3];
  return {
  	IsFocus,
  	valid,
  	tips
  }
}

export default connect(mapStateToProps)(FormNameContainer);