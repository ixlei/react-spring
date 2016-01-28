'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FinancePub from '../components/financePub';

class FinancePubContainer extends Component {
  render() {
  	return (<FinancePub {...this.props} />)
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

export default connect(mapStateToProps)(FinancePubContainer);