'use strict';

import React, {Component, PropTypes} from 'react';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
import {subAction} from '../actions/submit';
import {Link} from 'react-router';

export default class LoginForm extends Component {

  submit(e) {
    e.preventDefault();
    let form = document.forms.login;
    let body = new FormData(form);
    let arg = {
      action: '/customer/login',
      body,
      subType: 'login'
    }
    const {dispatch} = this.props;
    dispatch(subAction(arg));
  }

  componentWillReceiveProps(nextProps) {
    const {subType, subSuccess, isFetching, text} = nextProps;
    if(subType === 'login' && !isFetching && subSuccess) {
       this.history.pushState(null, '/customer/');
       return;
    }
  }

  render() {
  	return (
  	  <form name="login" onSubmit={this.submit.bind(this)}>
  	    <ul>
  	      <li><FormInput name="username" text="用户名" /></li>
  	      <li><FormInput name="password" text="密码" /></li>
  	      <li>
  	        <input type="radio" name ="logintype" 
  	         value="investor" checked/>
  	        <span>投资者登陆</span>
			<input type="radio" name="logintype" value="company" />
			<span>企业用户登陆</span>
		  </li>
		  <li>
		    <FormSubmit value="登录" ready={false}/>
		    <span id="btn-reg">
		      <Link to={'/customer/reg'}>立即注册</Link>
		    </span>
		  </li>
		  <li><span>{this.props.text}</span></li>
  	    </ul>
  	  </form>
  	)
  }
}

LoginForm.contextTypes = {
  history: PropTypes.object.isRequired
}

LoginForm.propTypes = {
  subType: PropTypes.string.isRequired,
  subSuccess: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}