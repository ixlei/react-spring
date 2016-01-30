'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid, initItemInvalid} from '../actions/reg';

export default class FormPassword extends Component {
  constructor(props) {
  	super(props);
  }

  focus(e) {
    const {dispatch} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips({
      text: '密码要包含大小写字母和数字,长度6-12',
      checkKind: 'password'
    }));
  }

  blur(e) {
    const password = e.target.value;
    const {dispatch} = this.props;
    const rgExp = /(([a-zA-Z]+[0-9]+)?([0-9]+[a-zA-Z]+)?)+/g;
    if(password === '') {
      dispatch(itemInvalid({invalid: true, checkKind: 'password'}));
      dispatch(itemTips({text:'密码不能为空', checkKind: 'password'}));
      dispatch(isFocus(''));
      return;
    }
 
    if(!rgExp.test(password)) {
      dispatch(itemInvalid({invalid: true, checkKind: 'password'}));
      dispatch(itemTips({
        text: '密码要包含大小写字母和数字',
         checkKind: 'password'
       }));
      dispatch(isFocus(''));
      return;
    }

    if(password.length < 6) {
      dispatch(itemInvalid({invalid: true, checkKind: 'password'}));
      dispatch(itemTips({
        text: '密码要包含大小写字母和数字',
        checkKind: true
      }));
      dispatch(isFocus(''));
      return;
    }
    
    dispatch(dispatch(itemInvalid({invalid: false, checkKind: 'password'})));
    dispatch(itemTips({text:'', checkKind: 'password'}));
    dispatch(isFocus(''));
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(itemTips({text: '', checkKind: 'password'}));
    dispatch(initItemInvalid('password'));
  }

  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'password')) {
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
  	const {IsFocus,valid} = this.props;
  	return (<div>
      <label className="label">密码:</label>
	  <input type="password"
	   className="reg-input"
	   ref='password'
	   name="password" onFocus={this.focus.bind(this)}
	   onBlur={this.blur.bind(this)}/>
	  <span className={this.getTipsClassName(IsFocus,valid)}>{this.props.tips}</span>
	 </div>
  	)
  }
}

FormPassword.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired
}