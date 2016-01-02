'use strict';

import React, {Component, PropTypes} from 'react';
import InvestorNav from '../components/investorNav';
import {connect} from 'react-redux';

class InvestorNavContainer extends Component {
  render() {
  	return (<InvestorNav {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {activeIndex: {index}} = state;
  return {
  	index
  }
}

export default connect(mapStateToProps)(InvestorNavContainer);