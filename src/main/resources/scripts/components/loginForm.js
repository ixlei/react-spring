'use strict';

import React, {Component, PropTypes} from 'react';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
import {subAction} from '../actions/submit';
import {Link} from 'react-router';
import {userType} from '../actions/user';

export default class LoginForm extends Component {
  
  change(e) {
  	const {dispatch} = this.props;
    e.target.name === 'userType' ? dispatch(userType(e.target.value)) : '';
  }

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
       this.context.history.pushState(null, '/customer/');
       return;
    }
  }

  render() {
  	const {uType, text} = this.props;
  	return (
  	  <form name="login" 
  	    onSubmit={this.submit.bind(this)}>
  	    <ul>
  	      <li><FormInput name="username" text="用户名" /></li>
  	      <li>
  	        <span className="label">密码</span>
  	        <input type="password" name="password" />
  	      </li>
  	      <li>
  	        <input type="radio" name ="userType" 
  	         value="investor" checked={uType === 'investor'} 
  	         onChange={this.change.bind(this)}/>
  	        <span>投资者登陆</span>
			<input type="radio" name="userType" 
			value="company" checked={uType === 'company'} 
			onChange={this.change.bind(this)}/>
			<span>企业用户登陆</span>
		  </li>
		  <li>
		    <FormSubmit value="登录" ready={false}/>
		    <span id="btn-reg">
		      <Link to={'/customer/reg'}>立即注册</Link>
		    </span>
		  </li>
		  <li><span>{text}</span></li>
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
  text: PropTypes.string.isRequired,
  uType: PropTypes.string.isRequired
}