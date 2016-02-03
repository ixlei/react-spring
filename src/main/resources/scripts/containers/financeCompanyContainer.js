'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FinanceCompany from '../components/financeCompany';

class FinanceCompanyContainer extends Component {
  render() {
  	return (<FinanceCompany {...this.props} />);
  }
}

function mapStateToProps(state) {
  const {compNews:{companyModel:comInfo, isFetching, invalidate, fetchType}} = state;
  return {
  	comInfo,
  	isFetching,
  	invalidate,
  	fetchType
  }
}

export default connect(mapStateToProps)(FinanceCompanyContainer);