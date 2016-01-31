'use strict';

import React, {Component, PropTypes} from 'react';
import {isFocus, itemTips, itemInvalid, initItemInvalid} from '../actions/reg';
import {postCheckValid} from '../actions/regCheckValid';

export default class FormIdcard extends Component {
  
  getTipsClassName(IsFocus, valid) {
  	if(Object.is(IsFocus, 'IdCard')) {
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
  	const {dispatch, checkKind = 'IdCard'} = this.props;
    dispatch(isFocus(e.target.name));
    dispatch(itemTips({text:'你的身份证号码', checkKind}));
  }

  blur(e) {
    const {dispatch, userType, checkKind = 'IdCard'} = this.props;
    let Idcard = e.target.value;
    if(Idcard === '') {
      dispatch(itemInvalid({invalid:true, checkKind}));
      dispatch(itemTips({text:'身份证号不能为空', checkKind}));
      dispatch(isFocus(''));
      return;
    }

    let rgExp = /\d+/g;
    if(!rgExp.test(Idcard) || Idcard.length < 18) {
      dispatch(itemInvalid({invalid:true, checkKind}));
      dispatch(itemTips({text:'身份证号不正确', checkKind}));
      dispatch(isFocus(''));
      return;
    }

    let formdata = new FormData();
    formdata.append('IdCard', Idcard);
    formdata.append('userType', userType);
    dispatch(postCheckValid('IdCard', formdata))
      .then((json) => {
       const {entities: {check, checkKind}} = json;
       if(check === 'valid') {
       	dispatch(itemTips({text: '', checkKind}));
        dispatch(isFocus(''));
        return;
       }
       	dispatch(itemTips({text:'此身份证号已被占用', checkKind}));
      })
     dispatch(isFocus(''));
  }
  
  componentWillUnmount() {
    const {dispatch, checkKind = 'IdCard'} = this.props;
    dispatch(itemTips({text: '', checkKind}));
    dispatch(initItemInvalid(checkKind));
  }

  render() {
  	const {IsFocus, valid, tips} = this.props;
  	return (<div>
      <label className="label">身份证号:</label>
	   <input type="text"
	    className="reg-input"
	    name="IdCard"
      onFocus={this.focus.bind(this)}
	    onBlur={this.blur.bind(this)}/>
	    <label className={this.getTipsClassName(IsFocus, valid)}>
	     {tips}
	    </label>
	  </div>
  	)
  }
}

FormIdcard.propTypes = {
  IsFocus: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  tips: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired
}