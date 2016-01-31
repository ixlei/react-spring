'use strict';

import React, {Component, PropTypes} from 'react';
import {
  isFocus, 
  itemTips, 
  itemInvalid, 
  initItemInvalid} from '../actions/reg';
import {postCheckValid} from '../actions/regCheckValid';

export default class FormUserName extends Component {
  constructor(props) {
  	super(props);
  }
  
  componentWillUnmount() {
    const {dispatch, checkKind = 'username'} = this.props;
    dispatch(itemTips({text: '', checkKind}));
    dispatch(initItemInvalid(checkKind));
  }

  focus(e) {
    const {dispatch, checkKind = 'username'} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips({text: '请输入邮箱',checkKind}));
  }

  blur(e) {
    const {dispatch, userType, checkKind = 'username'} = this.props;
    let username = e.target.value;
    let rgExp = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/g;
    
    if(username === '') {
      dispatch(itemInvalid({invalid: true, checkKind}));
      dispatch(itemTips({text:'用户名不能为空', checkKind}));
      dispatch(isFocus(''));
      return;
    }
    
    if(!rgExp.test(username)) {
      dispatch(itemInvalid({invalid: true, checkKind}));
      dispatch(itemTips({text:'输入正确的邮箱', checkKind}));
      dispatch(isFocus(''));
      return;
    }
    
    let formdata = new FormData();
    formdata.append('username', username);
    formdata.append('userType', userType);
    dispatch(postCheckValid('username', formdata))
     .then(json => {
       const {entities: {check, checkKind}} = json;
       if(check === 'valid') {
       	 dispatch(itemTips({text: '', checkKind}));
         dispatch(isFocus(''));
         return;
       }
       dispatch(itemTips({text: '此用户名已被占用', checkKind}));
       dispatch(isFocus(''));
    });
  }
  
  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'username')) {
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
  	const {IsFocus, valid} = this.props;
  	return (<div>
  	    <label className="label">邮箱:</label>
        <input type="text" className="reg-input" name="username" 
        onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}/>
        <label className=
        {this.getTipsClassName(IsFocus, valid)}>
        {this.props.tips}
        </label>
  	  </div>
  	)
  }
}

FormUserName.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired
}