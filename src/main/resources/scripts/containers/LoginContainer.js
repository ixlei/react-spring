'use strict';

import React, {Component, PropTypes} from 'react';
import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import Unslider from '../components/unslider';

require('../../styles/login.scss');

class LoginFormContainer extends Component {
  render() {
  	let unslider = {
  	  list: ['banner1.jpg', 'banner2.png', 'banner3.png'],
	  arrowImgUrl: ['btn-pre.png', 'btn-next.png']
  	}

  	return (<div id="content" className="loginPage">
  	  <Unslider {...unslider} />
  	  <div id="login">
  	    <LoginForm {...this.props} />
  	  </div>
  	</div>
  	)
  }
}

function mapStateToProps(state) {
  const {subReducer: {subType, subSuccess, isFetching, text}, user: {userType}} = state;
  return {
  	subType,
  	subSuccess,
  	isFetching,
  	text,
  	uType: userType
  }
}

export default connect(mapStateToProps)(LoginFormContainer);