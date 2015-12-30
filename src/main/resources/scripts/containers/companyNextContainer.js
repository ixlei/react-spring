'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyRegNext from '../components/companyRegNext';

class CompanyNextContainer extends Component {
  render() {
  	return (<CompanyRegNext {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {subType, subSuccess, isFetching} = state;
  return {
  	subType,
  	subSuccess,
  	isFetching
  }
}

export default connect(mapStateToProps)(CompanyNextContainer);
