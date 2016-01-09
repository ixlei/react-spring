'use strict';

import React, {Component, PropTypes} from 'react';
import InvestorIndex from '../components/investorIndex';
import {connect} from 'react-redux';

class InvestorIndexContainer extends Component {
  
  render() {
  	let unsliderTop = ['banner1.jpg', 'banner2.png', 'banner3.png'],
		arrowImgUrl = ['btn-pre.png', 'btn-next.png'],
		unsliderLeft = ['touzizhe1.png', 'touzizhe2.png'],
		unsliderRight = ['touzizhe3.png', 'touzizhe4.png'];
	let props = Object.assign({}, this.props, {unsliderTop, arrowImgUrl, unsliderLeft, unsliderRight});
  	return (
  	  <InvestorIndex {...props} />
  	)
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(InvestorIndexContainer);