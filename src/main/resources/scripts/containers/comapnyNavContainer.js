'use strict';

import React, {Component, PropTypes} from 'react';
import CompanyNav from '../components/companyNav';
import {connect} from 'react-redux';

class CompanyNavContainer extends Component {
  render() {
  	return (<CompanyNav {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {activeIndex: {index}} = state;
  return {
  	index: index || 0
  };
}

export default connect(mapStateToProps)(CompanyNavContainer);