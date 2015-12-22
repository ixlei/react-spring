'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid} from '../actions/reg';

export default class FormName extends Component {
  
  focus(e) {
    const {dispatch} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips('你的姓名'));
  }

  blur(e) {
    const {dispatch} = this.props;
    let value = e.target.value;
    if(value === '') {
      dispatch(itemInvalid(true));
      dispatch(itemTips('姓名不能为空'));
      dispatch(isFocus(''));
      return;
    }

    dispatch(itemInvalid(false));
    dispatch(itemTips(''));
    dispatch(isFocus(''));
    return;
  }

  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'name')) {
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
  	const {IsFocus, valid, tips,userType} = this.props;
  	return (<div>
      <span className="label">
       {userType === 'investor' ? '姓名:' : '企业名称:'}
      </span>
      <input type="text" 
      className="reg-input"
      name={userType === 'investor' ? "name" : 'companyName'}
      onFocus={this.focus.bind(this)}
      onBlur={this.blur.bind(this)}/>
      <span className={this.getTipsClassName(IsFocus, valid)}>
        {tips}
      </span>
    </div>
  	)
  }
}

FormName.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired
}