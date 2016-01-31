'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import RegForm from '../components/regForm';

class RegFormContainer extends Component {
  render() {
  	return (<RegForm {...this.props} />)
  }
}

function mapStateToProps(state) {
  const {subReducer: {subType, subSuccess,isFetching},
   user:{userType}} = state;
  return {
    subType,
    subSuccess,
    isFetching,
    userType
  }
}

export default connect(mapStateToProps)(RegForm);