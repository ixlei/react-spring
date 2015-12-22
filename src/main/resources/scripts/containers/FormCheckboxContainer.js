'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormCheckbox from '../components/FormCheckbox';

class FormCheckboxContainer extends Component {
  render() {
  	return (<FormCheckbox {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {reg: {iagree}} = state;
  return {
  	iagree
  }
}

export default connect(mapStateToProps)(FormCheckboxContainer);