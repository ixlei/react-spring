'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Raisedbonds from '../components/raisedbonds';

class RaisedbondsContainer extends Component {
  render() {
  	return (<Raisedbonds {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {user: {companyName, createTime, 
  	registerAddress, registerCapital, workField}} = state;
  const userInfo = {companyName, createTime, 
  	registerAddress, registerCapital, workField}
  return {
  	userInfo
  };
}

export default connect(mapStateToProps)(RaisedbondsContainer);