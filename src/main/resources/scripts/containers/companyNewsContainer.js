'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyUserNews from '../components/companyUserNews';

class CompanyNewsConatainer extends Component {
  render() {
  	return (<CompanyUserNews {...this.props} />)
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(CompanyNewsConatainer);