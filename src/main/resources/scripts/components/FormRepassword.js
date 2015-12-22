'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid} from '../actions/reg';

export default class FormRepassword extends Component {
  focus(e) {
    const {dispatch} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips('重新输入密码'));
  }

  blur(e) {
  	const {dispatch} = this.props;
  	let form = document.forms.reg;
  	let ele = form.querySelector('input[name=password]');
    let password = ele.value;
    if(password === '') {
      dispatch(itemInvalid(true));
      dispatch(itemTips('重复密码'));
      dispatch(isFocus(''));
      return;
    }

    if(e.target.value !== password) {
      dispatch(itemInvalid(true));
      dispatch(itemTips('两次密码不一致'));
      dispatch(isFocus(''));
      return;
    }
    dispatch(itemInvalid(false));
    dispatch(itemTips(''));
    dispatch(isFocus(''));
    
  }

  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'repassword')) {
  	  return 'check icon-tips';
  	}
  	if(Object.is(valid, 'valid')) {
  	  return 'check icon-success';
  	}

  	if(Object.is(valid, 'invalid')) {
      return 'check icon-error';
  	}

  	return 'check';
  }

  render() {
  	const {IsFocus, valid, tips} = this.props;
  	return (<div>
  	  <span className="label">确认密码:</span>
      <input type="password"
       className="reg-input"
       name="repassword"
       onFocus={this.focus.bind(this)}
       onBlur={this.blur.bind(this)}/>
       <span className={this.getTipsClassName(IsFocus, valid)}>
       {tips}
       </span>
      </div>
  	)
  }
}

FormRepassword.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired
}