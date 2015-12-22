'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormRepassword from '../components/FormRepassword';

class FormRepasswordContainer extends Component {
  render() {
  	return (
  	  <FormRepassword {...this.props} />
  	)
  }
}

function mapStateToProps(state) {
  const {reg:{IsFocus, itemState}} = state;
  const {valid, tips} = itemState[2];
  return {
  	IsFocus,
  	valid,
  	tips
  }
}

export default connect(mapStateToProps)(FormRepasswordContainer);