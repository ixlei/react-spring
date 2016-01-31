'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FormComName from '../components/FormComName';

class FormComNameContainer extends Component {
  render() {
  	return (<FormComName {...this.props} />);
  }
}

function mapStateToProps(state) {
  const {reg: {IsFocus, itemState}} = state;
  const {valid, tips} = itemState[5];
  return {
  	IsFocus,
  	valid,
  	tips
  };
}

export default connect(mapStateToProps)(FormComNameContainer);