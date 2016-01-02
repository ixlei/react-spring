'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Nav from '../components/customerNavHeader';

class NavContainer extends Component {
  render() {
	return (<Nav {...this.props} />)
  }
}

function mapStateToProps(state) {

	const {activeIndex} = state;
	
	const logoUrl = '/images/logo-last.png';
	const goList = [{
		addr: 'index',
		text: '首页'
	},{
		addr: 'finance',
		text: '融资企业'
	},{
		addr: 'invest',
		text: '投资中心'
	},{
		addr: 'service',
		text: '企业服务'
	}];
	const subNav = [{
		addr:'asset',
		text: '资产管理'
	}, {
		addr: 'assetgo',
		text: '电子签约'
	}, {
		addr: 'invest',
		text: '投/融资'
	}];

	const loginList = [{
		addr:'customer/login',
		text: '登录'
	}, {
		addr:'customer/reg',
		text: '注册'
	}];
	return {
		userType: 'customer',
		logoUrl,
		activeIndex,
		goList,
		subNav,
		loginList
	};
}

export default connect(mapStateToProps)(NavContainer);