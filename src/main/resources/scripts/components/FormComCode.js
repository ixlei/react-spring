'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid, initItemInvalid} from '../actions/reg';
import {postCheckValid} from '../actions/regCheckValid';

class FormComCode extends Component {
  
  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'code')) {
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

  focus(e) {
  	const {dispatch, checkKind = 'code'} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips({text:'你的组织机构代码', checkKind}));
  }

  blur(e) {
    const {dispatch, userType, checkKind = 'code'} = this.props;
    let code = e.target.value;
    if(code === '') {
      dispatch(itemInvalid({invalid:true, checkKind}));
      dispatch(itemTips({text:'组织机构代码不能为空', checkKind}));
      dispatch(isFocus(''));
      return;
    }

    let rgExp = /\d+/g;
    if(!rgExp.test(code) || code.length < 18) {
      dispatch(itemInvalid({invalid:true, checkKind}));
      dispatch(itemTips({text:'组织机构代码不正确', checkKind}));
      dispatch(isFocus(''));
      return;
    }

    let formdata = new FormData();
    formdata.append('code', code);
    formdata.append('userType', userType);
    dispatch(postCheckValid('code', formdata))
      .then((json) => {
       const {entities: {check, checkKind}} = json;
       if(check === 'valid') {
       	dispatch(itemTips({text: '', checkKind}));
        dispatch(isFocus(''));
        return;
       }
       	dispatch(itemTips({text:'组织机构代码已被占用', checkKind}));
      })
     dispatch(isFocus(''));
  }
  
  componentWillUnmount() {
    const {dispatch, checkKind = 'code'} = this.props;
    dispatch(itemTips({text: '', checkKind}));
    dispatch(initItemInvalid(checkKind));
  }

  render() {
  	const {IsFocus, valid, tips} = this.props;
  	return (<div>
      <label className="label">组织机构代码:</label>
	   <input type="text"
	    className="reg-input"
	    name="code"
        onFocus={this.focus.bind(this)}
	    onBlur={this.blur.bind(this)}/>
	    <span className={this.getTipsClassName(IsFocus, valid)}>
	     {tips}
	    </span>
	  </div>
  	)
  }
}

FormComCode.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired
}

export default FormComCode;