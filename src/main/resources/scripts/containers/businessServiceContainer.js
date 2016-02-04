'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import BusinessService from '../components/businessService';

class BusinessServiceContainer extends Component {
  render() {
  	return (<BusinessService {...this.props} />);
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BusinessServiceContainer);