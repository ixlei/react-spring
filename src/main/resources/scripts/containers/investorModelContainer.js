'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import InvestorModel from '../components/investorModel';

class InvestorModelContainer extends Component {
  render() {
  	return (<InvestorModel {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {investorModel:{data, modelType}} = state;
  return {
    data,
    modelType
  }
}

export default connect(mapStateToProps)(InvestorModelContainer)
