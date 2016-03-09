'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import RegStep from '../components/regStep';

class RegContainer extends Component {
  render() {
	return (
	  <RegStep {...this.props} />
	)
  }
}

function mapStateToProps(state) {
  let {reg: {regStep}} = state;
  return {
  	regStep
  };
}

export default connect(mapStateToProps)(RegContainer);