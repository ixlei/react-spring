'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid, initItemInvalid} from '../actions/reg';

export default class FormRepassword extends Component {

  focus(e) {
    const {dispatch, checkKind = 'repassword'} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips({text: '重新输入密码', checkKind}));
  }

  blur(e) {
  	const {dispatch, checkKind = 'repassword'} = this.props;
  	let form = document.forms.reg;
  	let ele = form.querySelector('input[name=password]');
    let password = ele.value;
    if(password === '') {
      dispatch(itemInvalid({invalid: true, checkKind}));
      dispatch(itemTips({text: '重复密码', checkKind}));
      dispatch(isFocus(''));
      return;
    }

    if(e.target.value !== password) {
      dispatch(itemInvalid({invalid: true, checkKind}));
      dispatch(itemTips({text:'两次密码不一致', checkKind}));
      dispatch(isFocus(''));
      return;
    }

    dispatch(itemInvalid({invalid: false, checkKind}));
    dispatch(itemTips({text:'', checkKind}));
    dispatch(isFocus(''));
  }
  
  componentWillUnmount() {
    const {dispatch, checkKind = 'repassword'} = this.props;
    dispatch(initItemInvalid(checkKind));
    dispatch(itemTips({text:'', checkKind}));
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