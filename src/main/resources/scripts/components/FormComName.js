'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid, initItemInvalid} from '../actions/reg';

class FormComName extends Component {

  focus(e) {
    const {dispatch, checkKind = 'companyName'} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips({text:'请输入公司名', checkKind}));
  }

  blur(e) {
    const {dispatch, checkKind = 'companyName'} = this.props;
    let value = e.target.value;
    if(value === '') {
      dispatch(itemInvalid({invalid: true, checkKind}));
      dispatch(itemTips({text:'公司名不能为空', checkKind}));
      dispatch(isFocus(''));
      return;
    }

    dispatch(itemInvalid({invalid: false, checkKind}));
    dispatch(itemTips({text:'', checkKind}));
    dispatch(isFocus(''));
  }
  
  componentWillUnmount() {
    const {dispatch, checkKind = 'companyName'} = this.props;
    dispatch(itemTips({text:'', checkKind}));
    dispatch(initItemInvalid(checkKind));
  }

  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'companyName')) {
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
      <label className="label">企业名称:</label>
      <input type="text" 
       className="reg-input"
       name="companyName"
       onFocus={this.focus.bind(this)}
       onBlur={this.blur.bind(this)}/>
      <span className={this.getTipsClassName(IsFocus, valid)}>
        {tips}
      </span>
    </div>
  	)
  }
}

FormComName.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired
}

export default FormComName;