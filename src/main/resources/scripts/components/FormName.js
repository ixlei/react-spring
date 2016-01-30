'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid, initItemInvalid} from '../actions/reg';

export default class FormName extends Component {
  
  focus(e) {
    const {dispatch} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips({text:'你的姓名', checkKind: 'name'}));
  }

  blur(e) {
    const {dispatch} = this.props;
    let value = e.target.value;
    if(value === '') {
      dispatch(itemInvalid({invalid: true, checkKind: 'name'}));
      dispatch(itemTips({text:'姓名不能为空', checkKind: 'name'}));
      dispatch(isFocus(''));
      return;
    }

    dispatch(itemInvalid({invalid: false, checkKind: 'name'}));
    dispatch(itemTips({text:'', checkKind: 'name'}));
    dispatch(isFocus(''));
  }
  
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch(itemTips({text:'', checkKind: 'name'}));
    dispatch(initItemInvalid('name'));
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
  	const {IsFocus, valid, tips, userType} = this.props;
  	return (<div>
      <label className="label">
       {userType === 'investor' ? '姓名:' : '企业名称:'}
      </label>
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