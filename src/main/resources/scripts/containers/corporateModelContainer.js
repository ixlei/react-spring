'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CorporateModel from '../components/corporateModel';

class CorporateModelContainer extends Component {
  render() {
  	return (<CorporateModel {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {investorModel: {data: model, isFetching, success, error}} = state;
  return {
  	model,
  	isFetching,
  	success,
  	error
  };
}

export default connect(mapStateToProps)(CorporateModelContainer);