'use strict';

import React, {Component, PropTypes} from 'react';
import ReleaseTender from '../components/releaseTender';
import {connect} from 'react-redux';

class ReleaseTenderContainer extends Component {
  render() {
  	return (<ReleaseTender {...this.props}/>)
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

export default connect(mapStateToProps)(ReleaseTenderContainer)