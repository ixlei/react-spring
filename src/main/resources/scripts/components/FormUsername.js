'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid} from '../actions/reg';
import {postCheckValid} from '../actions/regCheckValid';

export default class FormUserName extends Component {
  constructor(props) {
  	super(props);
  }
  
  focus(e) {
    const {dispatch} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips('请输入邮箱'));
  }

  blur(e) {
    const {dispatch} = this.props;
    let username = e.target.value;
    let rgExp = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/g;
    
    if(username === '') {
      dispatch(itemInvalid(true));
      dispatch(itemTips('用户名不能为空'));
      dispatch(isFocus(''));
      return;
    }
    
    if(!rgExp.test(username)) {
      dispatch(itemInvalid(true));
      dispatch(itemTips('输入正确的邮箱'));
      dispatch(isFocus(''));
      return;
    }
    
    let formdata = new FormData();
    formdata.append('username', username);
    dispatch(postCheckValid('username', formdata))
     .then((json) => {
       const {entities: {check}} = json;
       if(check === 'valid') {
       	 dispatch(itemTips(''));
       } else {
       	 dispatch(itemTips('此用户名已被占用'));
       }
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
  	    <span className="label">邮箱:</span>
        <input type="text" className="reg-input" name="username" 
        onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}/>
        <span className=
        {this.getTipsClassName(IsFocus, valid)}>
        {this.props.tips}
        </span>
  	  </div>
  	)
  }
}

FormUserName.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired
}