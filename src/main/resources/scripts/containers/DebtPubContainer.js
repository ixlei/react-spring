'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DebtPub from '../components/debtPub';

class DebtPubContainer extends Component {
  render() {
  	return (<DebtPub {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {user:{username, companyAddress, investorAddress, legalRepresentative, investFiled}} = state;
  const userInfo = {
  	username,
  	companyAddress,
  	investorAddress,
  	legalRepresentative,
  	investFiled
  }
  return {
  	userInfo
  };
}

export default connect(mapStateToProps)(DebtPubContainer);