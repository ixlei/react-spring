'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyIndex from '../components/companyIndex';

class CompanyIndexContainer extends Component {
  render() {
  	return (<CompanyIndex {...this.props} />)
  }
}

function mapStateToProps(state) {
  let unsliderTop = ['banner1.jpg', 'banner2.png', 'banner3.png'],
	  arrowImgUrl = ['btn-pre.png', 'btn-next.png'],
	  unsliderLeft = ['touzizhe1.png', 'touzizhe2.png'],
	  unsliderRight = ['touzizhe3.png', 'touzizhe4.png'];
	return {
	  unsliderTop, 
	  arrowImgUrl, 
	  unsliderLeft, 
	  unsliderRight
	};
}

export default connect(mapStateToProps)(CompanyIndexContainer);