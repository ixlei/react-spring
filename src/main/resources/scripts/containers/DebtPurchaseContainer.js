'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DebtPurchase from '../components/debtPurchase';

class DebtPurchaseContainer extends Component {
  render() {
  	return (<DebtPurchase {...this.props} />)
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(DebtPurchaseContainer);