'use strict';

import React, {Component, PropTypes} from 'react';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
import {subAction, initSub} from '../actions/submit';
import {Link} from 'react-router';
import {userType} from '../actions/user';

export default class LoginForm extends Component {
  
  change(e) {
  	const {dispatch} = this.props;
    dispatch(userType(e.target.value));
  }

  submit(e) {
    e.preventDefault();
    let form = document.forms.login;
    let body = new FormData(form);
    let arg = {
      action: '/customer/login',
      body,
      subType: 'login'
    };
    const {dispatch} = this.props;
    dispatch(subAction(arg));
  }

  componentWillReceiveProps(nextProps) {
    const {subType, subSuccess, isFetching, text, uType} = nextProps;
    if(subType === 'login' && !isFetching && subSuccess) {
       if(uType === 'investor') {
        this.context.history.pushState(null, '/investor/');
        return;
       }
       this.context.history.pushState(null, '/company/');
    }
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(initSub());
  }

  renderPassword() {
  	return (
  	  <div>
  	    <label className="label">密码</label>
  	    <input type="password" name="password" />
  	  </div>
  	)
  }

  renderUserType() {
  	const {uType} = this.props;
  	return (
      <div>
        <input type="radio" 
          name ="userType" 
  	      value="investor"
  	      checked={uType === 'investor'} 
  	      onChange={this.change.bind(this)}/>
  	    <label>投资者</label>
		    <input type="radio"
          name="userType"
			    value="company"
          checked={uType === 'company'} 
			    onChange={this.change.bind(this)}/>
	      <label>企业用户</label>
      </div>
  	)
  }
   
  renderLoginBtn() {
  	return (<div>
  	  <FormSubmit value="登录" ready={false}/>
		  <span id="btn-reg">
		    <Link to={'/customer/reg'}>立即注册</Link>
		  </span>
  	</div>
  	)
  }

  render() {
  	const {text} = this.props;
  	return (
  	  <form name="login" onSubmit={this.submit.bind(this)}>
  	    <ul>
  	      <li><FormInput name="username" text="用户名" /></li>
  	      <li>{this.renderPassword()}</li>
  	      <li>{this.renderUserType()}</li>
  	      <li>{this.renderLoginBtn()}</li>
  	      <li><p>{text}</p></li>
  	    </ul>
  	  </form>
  	)
  }
}

LoginForm.contextTypes = {
  history: PropTypes.object.isRequired
};

LoginForm.propTypes = {
  subType: PropTypes.string.isRequired,
  subSuccess: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  uType: PropTypes.string.isRequired
};